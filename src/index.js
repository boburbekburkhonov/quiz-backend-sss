import express from 'express'
import mongo from './utils/mongo.js'

const app = express();

mongo()
  .then(() => console.log('Connected'))
  .catch((err) => console.error(err))


app.listen(3000, console.log(3000));
