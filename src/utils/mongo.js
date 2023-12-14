import mongoose from "mongoose";
import usersModel from '../model/users.model.js'

export default async() => await mongoose.connect('mongodb://localhost:27017/quiz')