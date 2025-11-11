import { Client, Pool } from "pg";
import { dbConfig, appDbName } from "./db.ts";

async function createDatabase(): Promise<void> {
    const client = new Client(dbConfig);
    
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${appDbName}'`);
        if (res.rowCount === 0) {
            await client.query(`CREATE DATABASE ${appDbName}`);
            console.log(`Database '${appDbName}' created successfully.`);
        } else {
            console.log(`Database '${appDbName}' already exists.`);
        }
    } catch (error) {
        console.error('Error creating database:', error);
    } finally {
        await client.end();
        console.log('PostgreSQL connection closed.');
    }
}

createDatabase();