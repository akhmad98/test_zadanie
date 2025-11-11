import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
}

export const appDbName = process.env.DB_NAME;