import { Schema, model } from "mongoose";

const dataSchema = new Schema({
  user_id:{
    type: Schema.Types.ObjectId,
  },

  user_username: {
    type: String,
    required: true
  },

  user_name: {
    type: String,
    required: true
  },

  user_password: {
    type: String,
    required: true
  }
}, {
  collection: 'users'
})

export default model('users', dataSchema)