import client from '../../../db/rd';
import { IBookings } from '../../interfaces/IBookings';

export async function saveToTempVal(val: IBookings) {
    const keyForTemp: string = `${val.event_id}:${val.user_id}`;
    await client.set(keyForTemp, JSON.stringify(val));
}