import client from '../../config/rd.ts';
import type { IBookings } from '../../interfaces/IBookings.ts';

export async function saveToTempVal(val: IBookings) {
    const keyForTemp: string = `${val.event_id}:${val.user_id}`;
    await client.set(keyForTemp, JSON.stringify(val));
}