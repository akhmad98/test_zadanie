import { Client } from "pg";
import { dbConfig } from "./db.ts";

const client = new Client(dbConfig);

async function verifyConnection(): Promise<void> {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('ERROR occured while conencting:', error);
    }
}

verifyConnection();

export default client;
