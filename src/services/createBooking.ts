import type { ICreateRequest } from "../interfaces/ICreateRequest.ts";
import { createBookings } from "../repos/createBookings.repo.ts";
import type { IBookings } from "../interfaces/IBookings.ts";

export async function createBooking(req: ICreateRequest) {
    const bodyParsed: IBookings = req.body;
    if (!bodyParsed.event_id || !bodyParsed.user_id) {
        throw new Error('Invalid parameters provided');
    }
    await createBookings(bodyParsed);
}