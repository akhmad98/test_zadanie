import dotenv from 'dotenv';
import { Router } from 'express';
import { createBooking } from './services/createBooking.ts';

dotenv.config();
Router().route('/api/bookings/reserve').post(async (req, res) => {
    const newBooking = await createBooking(req);
    return res.json(newBooking);
})
