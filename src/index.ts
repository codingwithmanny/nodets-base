// Imports
// ========================================================
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'express';
import helmet from 'helmet';

// ENV VARS
// ========================================================
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const VERSION: string = process.env.VERSION || 'unknown';

// Init
// ========================================================
const app = express();

// Middlewares
// ========================================================
app.use(cors());
app.use(helmet());

// Endpoints / Routess
// ========================================================
app.get('/', (_req, res) =>
  res.send({ version: VERSION, environment: NODE_ENV }),
);

// Exprots
// ========================================================
export default app;
