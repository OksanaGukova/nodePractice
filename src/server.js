// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';

// Отримання значення порту з перевіркою
const portValue = env('PORT', '3000');
const PORT = Number(portValue);

if (isNaN(PORT) || PORT <= 0 || PORT >= 65536) {
  throw new Error(`Invalid port number: ${portValue}`);
}

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
