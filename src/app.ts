import express from 'express';
import { createBooking } from './services/createBooking.ts';
import { deleteBooking } from './services/deleteBooking.ts';

const app = express();

app.use(express.json());

app.route('/api/bookings/reserve').post(async (req: express.Request, res: express.Response) => {
    const newBooking = await createBooking(req);
    return res.json(newBooking);
})

app.route('/api/bookings/delete/:id').delete(async (req: express.Request, res: express.Response) => {
    const isDeleted = await deleteBooking(req);
    return 'OK'
})
// app.use(errorHandler)

export default app;