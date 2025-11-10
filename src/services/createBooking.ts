import { ICreateRequest } from "../interfaces/ICreateRequest";
import { createBookings } from "../repos/createBookings.repo";
import { IBookings } from "../interfaces/IBookings";

export async function createBooking(req: ICreateRequest) {
    const bodyParsed: IBookings = req.body;
    
    await createBookings(bodyParsed);
}