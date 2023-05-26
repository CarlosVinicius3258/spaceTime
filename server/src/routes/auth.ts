import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import axios from 'axios';
import { prisma } from '../lib/prisma';
const paramsSchema = z.object({
  id: z.string().uuid(),
});
const registerBodySchema = z.object({
  code: z.string(),
});
const userScheme = z.object({
  id: z.number(),
  login: z.string(),
  name: z.string(),
  avatar_url: z.string().url(),
});
const paramsSchemaParse = (request: FastifyRequest) => paramsSchema.parse(request.params);
const registerBodySchemaParse = (request: FastifyRequest) => registerBodySchema.parse(request.body);
export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const { code } = registerBodySchemaParse(request);
    const accesTokenResponse = await axios.post('https://github.com/login/oauth/access_token', null, {
      params: {
        code,
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
      },
      headers: {
        Accept: 'application/json',
      },
    });
    const { access_token } = accesTokenResponse.data;
    

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userData = userScheme.parse(userResponse.data);
    let user = await prisma.user.findUnique({
      where: {
        githubId: userData.id,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          avatarUrl: userData.avatar_url,
          githubId: userData.id,
          name: userData.name,
          login: userData.login,
        },
      });
    }

    const token = app.jwt.sign(
      {
        name: user.name,
        avatarUrl: user.avatarUrl,
      },
      {
        sub: user.id,
        expiresIn: '30 days',
      }
    );
    return {
      token,
    };
  });
}
