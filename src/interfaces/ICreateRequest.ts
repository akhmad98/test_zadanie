import { Request, Response } from 'express';
import type { IBookings } from "./IBookings.ts";

export interface ICreateRequest extends Request{
    body: IBookings
}