import { Schema, model } from "mongoose";

const dataSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },

  middle_name: {
    type: String,
    required: true
  },

  last_name: {
    type: String,
    required: true
  }
}, {
  collection: 'list_users'
})

export default model('list_users', dataSchema)