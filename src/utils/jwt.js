import jwt from 'jsonwebtoken'

export const sign = payload => jwt.sign(payload, String(process.env.SECRET_KEY))