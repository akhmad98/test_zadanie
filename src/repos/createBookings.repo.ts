import { getFromFastAccess } from "../repos/shared/getTemprorary";
import { saveToTempVal } from "./shared/saveTemprory";
import pool from '../../db/db';
import { IBody } from "../interfaces/IBody";
import { IBookings } from "../interfaces/IBookings";

export const createBookings = async (body: IBookings) => {
    const keyForTempVal: string = `${body.event_id}:${body.user_id}`;
    const checkFromCache: IBookings | null = await getFromFastAccess(keyForTempVal);
    if(checkFromCache) {
        throw new Error('You can not add same booking as existed!')
    }

    const isSavedToTemp = await saveToTempVal(body);
    const query: string = `INSERT INTO bookings (event_id, user_id) VALUES (${body.event_id}, ${body.user_id})`;
    try {
        const result = await pool.query(query);
    } catch (error) {
        throw Error('Error executing query');
    }
}