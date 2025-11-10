import client from '../../../db/rd.ts';
import { IBookings } from '../../interfaces/IBookings.ts';

export async function saveToTempVal(val: IBookings) {
    const keyForTemp: string = `${val.event_id}:${val.user_id}`;
    await client.set(keyForTemp, JSON.stringify(val));
}