import client from '../../config/rd.ts';
import type { IBookings } from '../../interfaces/IBookings.ts';

export async function cleanTemporary(tempKey:string): Promise<void> {
    const temporaryValue = await client.get(tempKey);
    if (temporaryValue) {
        await client.del(tempKey);
    }
}
