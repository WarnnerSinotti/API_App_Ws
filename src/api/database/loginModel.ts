import { Schema } from "mongoose";
import mongoose from "mongoose";

const loginModel = new Schema({

    name: String,
    email: String,
    password: String,
    passwordConfirm: String,
    dataNascimento: Number,

},{timestamps: true})

export default mongoose.model('Users', loginModel)