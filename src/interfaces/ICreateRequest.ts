import { Request } from "express";
import { IBookings } from "./IBookings";

export interface ICreateRequest extends Request{
    body: IBookings
}