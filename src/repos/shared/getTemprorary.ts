import client from '../../../db/rd';
import { IBookings } from '../../interfaces/IBookings';


export async function getFromFastAccess(tempKey:string): Promise<IBookings | null> {
    const temporaryValue = await client.get(tempKey);
    if (temporaryValue) {
        return JSON.parse(temporaryValue);
    }
    return null;
}
