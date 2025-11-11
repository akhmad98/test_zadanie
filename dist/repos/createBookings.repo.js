"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookings = void 0;
const getTemprorary_1 = require("../repos/shared/getTemprorary");
const saveTemprory_1 = require("./shared/saveTemprory");
const db_1 = __importDefault(require("../db/db"));
const createBookings = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const keyForTempVal = `${body.event_id}:${body.user_id}`;
    const checkFromCache = yield (0, getTemprorary_1.getFromFastAccess)(keyForTempVal);
    if (checkFromCache) {
        throw new Error('You can not add same booking as existed!');
    }
    const isSavedToTemp = yield (0, saveTemprory_1.saveToTempVal)(body);
    const query = `INSERT INTO bookings (event_id, user_id) VALUES (${body.event_id}, ${body.user_id})`;
    try {
        const result = yield db_1.default.query(query);
    }
    catch (error) {
        throw Error('Error executing query');
    }
});
exports.createBookings = createBookings;
