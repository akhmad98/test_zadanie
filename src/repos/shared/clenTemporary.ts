import client from '../../config/rd.ts';

export async function cleanTemporary(tempKey:string): Promise<void> {
    const temporaryValue = await client.get(tempKey);
    if (temporaryValue) {
        await client.del(tempKey);
    }
}
