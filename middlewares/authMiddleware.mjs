import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
import bcrypt from 'bcrypt';



const jwtToken = async (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    

};

const encryptPassword =  async (password) => {
  const generateSalt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, generateSalt);
}

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
}

export default{jwtToken, encryptPassword, comparePassword}