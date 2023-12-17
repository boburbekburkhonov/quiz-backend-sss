import { Schema, model } from "mongoose";

const dataSchema = new Schema({
  user :{
    type: String,
    required: true
  },

  answers: [{
    answer_one: {
      type: String,
      required: true
    },

    answer_two: {
      type: String,
      required: true
    },

    answer_three: {
      type: String,
      required: true
    },

    answer_four: {
      type: String,
      required: true
    },

    answer_five: {
      type: String,
      required: true
    },

    answer_six: {
      type: String,
      required: true
    },

    answer_seven: {
      type: String,
      required: true
    },

    answer_eight: {
      type: String,
      required: true
    },

    answer_nine: {
      type: String,
      required: true
    },

    answer_ten: {
      type: String,
      required: true
    },

    replied_user:{
      type: String,
      required: true
    },
  }],
}, {
  collection: 'answers'
})

export default model('answers', dataSchema)