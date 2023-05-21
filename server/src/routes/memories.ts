import { FastifyInstance, FastifyRequest } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function memoriesRoutes(app: FastifyInstance) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });
  const bodySchema = z.object({
    content: z.string(),
    coverUrl: z.string().url(),
    isPublic: z.coerce.boolean().default(false),
  });

  const paramsSchemaParse = (request: FastifyRequest) => paramsSchema.parse(request.params);
  const bodySchemaParse = (request: FastifyRequest) => bodySchema.parse(request.body);

  app.addHook('preHandler', async (request) => {
    request.jwtVerify();
  });

  app.get('/memories', async (request) => {
    const memories = await prisma.memory.findMany({
      where: {
        idUser: request.user.sub,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        content: memory.content.substring(0, 120).concat('...'),
      };
    });
  });

  app.get('/memories/:id', async (request, reply) => {
    const { id } = paramsSchemaParse(request);
    console.log(id);
    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });
    if (!memory.isPublic && memory.idUser !== request.user.sub) {
      reply.status(403).send({ message: 'Forbidden' });
    }
    console.log(memory);
    return memory;
  });

  app.post('/memories', async (request) => {
    const body = bodySchemaParse(request);
    const { content, coverUrl, isPublic } = body;

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        idUser: request.user.sub,
      },
    });
    return memory;
  });

  app.put('/memories/:id', async (request, reply) => {
    const { id } = paramsSchemaParse(request);
    const body = bodySchemaParse(request);

    let memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    if (memory.idUser !== request.user.sub) {
      reply.status(403).send({ message: 'Forbidden' });
    }

    memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content: body.content,
        coverUrl: body.coverUrl,
        isPublic: body.isPublic,
      },
    });
    return memory;
  });

  app.delete('/memories/:id', async (request, reply) => {
    const { id } = paramsSchemaParse(request);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    if (memory.idUser !== request.user.sub) {
      reply.status(403).send({ message: 'Forbidden' });
    }
    await prisma.memory.delete({
      where: {
        id,
      },
    });
  });
}
