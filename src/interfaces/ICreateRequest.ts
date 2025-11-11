import express from 'express';
import type { IBookings } from "./IBookings.ts";

export interface ICreateRequest extends express.Request{
    body: IBookings
}