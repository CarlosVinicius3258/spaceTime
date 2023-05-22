import fastify from 'fastify';
import { memoriesRoutes } from './routes/memories';
import cors from '@fastify/cors';
import 'dotenv/config';
import { authRoutes } from './routes/auth';
import fastifyJwt from '@fastify/jwt';
import fastifyMultipart from '@fastify/multipart';
import { uploadRoutes } from './routes/upload';
import { fastifyStatic } from '@fastify/static';
import { resolve } from 'path';
const app = fastify();

//Middlewares/Libs
app.register(fastifyMultipart);
app.register(fastifyStatic, {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
});
app.register(fastifyJwt, {
  secret: `${process.env.JWT_SECRET}`,
});
app.register(cors, {
  origin: true,
});

//Routes
app.register(memoriesRoutes);
app.register(authRoutes);
app.register(uploadRoutes);

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Running on port 3333 🚀');
  });
