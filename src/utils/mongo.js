import mongoose from "mongoose";
import usersModel from '../model/users.model.js'
import usersListModel from '../model/list.users.model.js'
import usersAnswersModel from '../model/answers.model.js'

export default async() => await mongoose.connect('mongodb://localhost:27017/quiz')