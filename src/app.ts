import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { routes } from './api/routes';

export const app: express.Application = express();

// parse requests of content-type application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());

// define routes
routes(app);