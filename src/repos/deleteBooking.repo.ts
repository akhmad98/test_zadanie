import client from '../config/outsideQueriesDb.ts';
import { cleanTemporary } from "./shared/clenTemporary.ts";

export const deleteBookingById = async (eventId: number, userId: string) => {
    if (!eventId || !userId) {
        throw new Error('Invalid key is building');
    }
    await cleanTemporary(`${eventId}:${userId}`);

    const query: string = `DELETE FROM bookings WHERE event_id='${eventId}' AND user_id='${userId}';`;
    try {
        await client.query(query);
    } catch (error) {
        console.error('Error executing query:', error);
    }
}