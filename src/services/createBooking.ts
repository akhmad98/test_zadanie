import { ICreateRequest } from "../interfaces/ICreateRequest.ts";
import { createBookings } from "../repos/createBookings.repo.ts";
import { IBookings } from "../interfaces/IBookings.ts";

export async function createBooking(req: ICreateRequest) {
    const bodyParsed: IBookings = req.body;
    
    await createBookings(bodyParsed);
}