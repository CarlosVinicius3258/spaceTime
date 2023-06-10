import { randomUUID } from 'crypto';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { createWriteStream } from 'fs';
import { extname, resolve } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/;
export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    console.log('uploading file');
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5MB
      },
    });

    if (!upload) {
      return reply.status(400).send();
    }

    const isValidFileOFormat = mimeTypeRegex.test(upload.mimetype);

    if (!isValidFileOFormat) {
      return reply.status(400).send();
    }

    const fileId = randomUUID();
    const extension = extname(upload.filename);

    const fileName = fileId.concat(extension);

    const writeStream = createWriteStream(resolve(__dirname, '../../uploads/', fileName));

    await pump(upload.file, writeStream);

    const fullURl = request.protocol.concat('://').concat(request.hostname);
    const fileURL = new URL(`/uploads/${fileName}`, fullURl).toString();
    console.log(fileURL);
    return { fileURL };
  });
}
