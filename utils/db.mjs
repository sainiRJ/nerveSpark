import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();

import { MongoClient, ServerApiVersion } from 'mongodb';


const client = new MongoClient("mongodb+srv://rajesh:rajesh7839@cluster0.u5svdz9.mongodb.net/", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  
 export const dbConnection = async()=> {
    try {
      await client.connect();
      console.log("Connected to MongoDB");
  
      const db = client.db('NerveSparkData');
      app.use((req, res, next) => {
        req.db = db;
        next();
      });
    } catch (err) {
      console.error('Failed to connect server', err);
      process.exit(1); // Exit the process with an error code
    }
  }
  
  