import express from 'express';
import { deleteBookingById } from '../repos/deleteBooking.repo.ts';

export async function deleteBooking(req: express.Request) {
    const idFound = Number(req.params.event_id);
    const userId = req.params.user_id;
    if (!idFound) {
        throw new Error('Params invalid!')
    }

    await deleteBookingById(idFound, userId);
}