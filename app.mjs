import express from 'express';
const app = express();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';



import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()

import Routes from './routes/Routes.mjs'

import { dbConnection } from './utils/db.mjs';

const port  = 5000 ;

app.use(dbConnection);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/loginAdmin',async(req, res) =>{
  try {
    console.log("hello admin")
    const { adminId, password } = req.body;
    console.log(req.body);

    // Find the dealership in the database
    const admin = await req.db.collection('admins').findOne({adminId: adminId });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

     // Compare passwords
     
     const isMatch = await bcrypt.compare(password, admin.password);
     if (!isMatch) {
      
       return res.status(401).json({ error: 'Invalid credentials' });
     }

    // Generate 
    const token =tokenUtil.generateToken(adminId) ;
   return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
)

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
    return;
  }
  console.log(`Server is running on http://localhost:${port}`);
});