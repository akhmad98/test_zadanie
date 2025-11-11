import dotenv from 'dotenv';
import express from 'express';
import { createBooking } from './services/createBooking.ts';

dotenv.config();
express.Router().route('/api/bookings/reserve').post(async (req: express.Request, res: express.Response) => {
    const newBooking = await createBooking(req);
    return res.json(newBooking);
})
