import express from 'express'
import cors from 'cors'
import mongo from './utils/mongo.js'
import usersModel from './model/users.model.js'
import usersListModel from './model/list.users.model.js'
import usersAnswerModel from './model/answers.model.js'
import { sign } from './utils/jwt.js';

const app = express();

app.use(express.json())
app.use(cors())

mongo()
  .then(() => console.log('Connected'))
  .catch((err) => console.error(err))

app.get('/users', (req, res) => {
  res.send('Hello World!')
})

// ! LOGIN
app.post('/login/users', async (req, res) => {
  const {username, password} = req.body

  const foundUser = await usersModel.findOne({user_username: username, user_password: password})
  console.log(foundUser);
  if(!foundUser){
   return res.json({
      status:400,
      message: "Bunday user mavjud emas, iltimos ro'yhatdan o'ting!"
    })
  }

  res.json({
    status:200,
    message: {
      access_token: sign({username, password}),
      data: foundUser
    }
  })
})

// ! SIGIN
app.post('/create/users', async (req, res) => {
  const {username, name, password} = req.body

  const foundUser = await usersModel.findOne({user_username: username, user_name: name, user_password: password})

  if(foundUser){
   return res.json({
      status:400,
      message: "Bu user allaqachon yaratilgan!"
    })
  }
  const newUser = new usersModel({user_username: username, user_name: name, user_password: password})
  await newUser.save()
  res.json({
    status:201,
    message: {
      access_token: sign({username, password}),
      data: newUser
    }
  })
})

// ! LIST USERS
app.get('/list/users', async (req, res) => {
  const allUsers = await usersListModel.find()

  res.json(allUsers)
})

// ! LIST USERS GET
app.get('/answers/users', async (req, res) => {
  const foundUser = await usersAnswerModel.find()

  res.json({
    status: 200,
    message: 'Updated succesfully',
    data: foundUser
  })
})

// ! LIST USERS POST
app.post('/answers/users', async (req, res) => {
  const { user, answers }= req.body
  const [answer] = answers
  const foundUser = await usersAnswerModel.findOne({user: user})
  foundUser.answers.push(answer)
  await usersAnswerModel.findOneAndUpdate({user: user}, foundUser)

  res.json({
    status: 200,
    message: 'Updated succesfully'
  })
})

app.listen(3000, console.log(3000));
