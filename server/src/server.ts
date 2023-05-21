import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';
import cors from '@fastify/cors';
import 'dotenv/config';
import { authRoutes } from './routes/auth';
import fastifyJwt from '@fastify/jwt';
const app = fastify();

app.register(memoriesRoutes);
app.register(authRoutes);
app.register(fastifyJwt, {
  secret: `${process.env.JWT_SECRET}`,
});
app.register(cors, {
  origin: true,
});
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Running on port 3333 🚀');
  });
