// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import router from './routers/index.js';


import { env } from './utils/env.js';
import { errorHandler } from './services/middlewares/errorHandler.js';
import { notFoundHandler } from './services/middlewares/notFoundHandler.js';

// Отримання значення порту з перевіркою
const portValue = env('PORT', '3000');
const PORT = Number(portValue);

if (isNaN(PORT) || PORT <= 0 || PORT >= 65536) {
  throw new Error(`Invalid port number: ${portValue}`);
}

export const startServer = () => {

  const app = express();

  app.use(router);
  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );


  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
