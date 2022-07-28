import path from 'path';

import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import operationRoutes from './routes/operation.routes';
import authRoutes from './routes/auth.routes';

const app = express();
const react_path = path.join(__dirname, '..', '..', 'app', 'dist');

//settings
app.set('port', process.env.PORT || 3001);

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static(react_path));

config();

//routes
app.use('/api/v1/operations', operationRoutes);
app.use('/api/v1/auth', authRoutes);

export default app;
