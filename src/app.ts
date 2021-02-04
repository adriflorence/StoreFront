import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app: express.Application = express();

// parse requests of content-type application/json
app.use(bodyParser.json())

// enable cors
app.use(cors());