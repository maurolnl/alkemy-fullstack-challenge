import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import operationRoutes from './routes/operation.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('../../app/dist/index.html'));

config();

//routes
app.use('/api/v1/operations', operationRoutes);

export default app;
