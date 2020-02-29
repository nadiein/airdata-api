import * as mongoose from 'mongoose';

export const AirdataSchema = new mongoose.Schema({
    id: Number,
    data:Array
});