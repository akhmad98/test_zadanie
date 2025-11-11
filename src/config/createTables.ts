import { Client } from "pg";
import { dbConfig } from "./db.ts";

async function createTables() {
    const client = new Client(dbConfig);

    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');

        const createEventsTable = `CREATE TABLE IF NOT EXISTS events (id SERIAL PRIMARY KEY, name VARCHAR(100), total_seats INTEGER);`;
        await client.query(createEventsTable);
        console.log('Table "events" created!');

        const createBookingsTable = `CREATE TABLE IF NOT EXISTS bookings (id SERIAL PRIMARY KEY, event_id INTEGER REFERENCES events(id) ON DELETE CASCADE, user_id VARCHAR(100), created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`;
        await client.query(createBookingsTable);
    } catch (error) {
        console.error('ERROR creating tables:', error);
    } finally {
        await client.end();
    }
}

createTables();