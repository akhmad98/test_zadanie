import { getFromFastAccess } from "../repos/shared/getTemprorary.ts";
import { saveToTempVal } from "./shared/saveTemprory.ts";
import client from '../config/outsideQueriesDb.ts';
import type { IBookings } from "../interfaces/IBookings.ts";

export const createBookings = async (body: IBookings) => {
    const keyForTempVal: string = `${body.event_id}:${body.user_id}`;
    const checkFromCache: IBookings | null = await getFromFastAccess(keyForTempVal);
    if(checkFromCache) {
        throw new Error('You can not add same booking as existed!')
    }

    const isSavedToTemp = await saveToTempVal(body);
    const query: string = `INSERT INTO bookings (event_id, user_id) VALUES (${body.event_id}, '${body.user_id}');`;
    try {
        const result = await client.query(query);
    } catch (err) {
        console.error('Error executing query', err);
    }
}