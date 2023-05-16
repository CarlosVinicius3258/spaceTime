import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
const app = fastify();
const prisma = new PrismaClient();

app.post('/users', async () => {
  const user = prisma.user.findMany();
  return user;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Running on port 3333 🚀');
  });
