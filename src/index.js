import express from 'express'
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/')

const app = express();

(async () => {
  try {
     await mongoClient.connect();
     app.locals.collection = mongoClient.db("usersdb").collection("users");
     app.listen(3000);
     console.log("Сервер ожидает подключения...");
 }catch(err) {
     return console.log(err);
 }
})();