import express from 'express';
import { createBooking } from './services/createBooking.ts';

const app = express();

app.use(express.json());

app.route('/api/bookings/reserve').post(async (req: express.Request, res: express.Response) => {
    const newBooking = await createBooking(req);
    return res.json(newBooking);
})

// app.use(errorHandler)

export default app;