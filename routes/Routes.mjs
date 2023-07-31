import express from 'express';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import  authenticateUser from '../middlewares/authMiddleware.mjs';
import {registerAdmin,loginAdmin, registerUser, loginUser , registerDealership , loginDealership,generate } from '../controllers/authController.mjs'
import {addCar} from '../controllers/carController.mjs'
import { getDealsOnCar, getDealsFromDealership } from '../controllers/dealController.mjs'
import { getAllCars, getSoldCars } from '../controllers/dealershipController.mjs'
import { getVehiclesByUser, addSoldVehicle } from '../controllers/vehicleController.mjs'


const router = express.Router();

//admin registration
router.post('/registerAdmin',registerAdmin)

//admin login 
router.post("/loginAdmin",loginAdmin)

// // User registration
// router.post('/registerUser',registerUser )

// // User login
// router.post('/loginUser', loginUser);

// //dealer registration 
// router.post('/registerDealer',registerDealership );

// //dealer login
// router.post('/loginDealer', loginDealership);

// //generate random 
// router.get('/generate',generate)

// // add cars 
// router.post('/addCars', addCar)

// // // Get all cars
// router.get('/cars', getAllCars);
  
// //   // Get all cars sold by the dealership
//   router.get('/sold-cars',getSoldCars );
  
// //   // Add cars to the dealership
//   router.post('/cars', authenticateUser,getDealsOnCar );
  
// //   // Get deals provided by the dealership
//    router.get('/deals',getDealsFromDealership);
  
  
// //   // Get all vehicles the dealership has sold
//   router.get('/sold-vehicles',getVehiclesByUser);
  
// //   // Add a new vehicle to the list of sold vehicles after a deal is made
//   router.post('/sold-vehicles', authenticateUser,addSoldVehicle );


  

export default{router};
