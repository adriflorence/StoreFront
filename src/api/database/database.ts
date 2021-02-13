import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const database = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT as string),
});
