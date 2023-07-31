import faker from 'faker';

// Generate dummy data for the admin model
export const generateAdmin =()=> {
  const adminId = faker.internet.userName();
  const password = faker.internet.password();

  return {
    adminId,
    password
  };
}

// Generate dummy data for the user model
export  const generateUser= ()=> {
  const userEmail = faker.internet.email();
  const userId = faker.datatype.uuid;
  const userLocation = faker.address.city();
  const password = faker.internet.password();
  const vehicleInfo = [];

  return {
    userEmail,
    userId,
    userLocation,
    password,
    vehicleInfo
  };
}

// Generate dummy data for the dealership model
export const generateDealership = ()=> {
  const dealershipEmail = faker.internet.email();
  const dealershipId = faker.datatype.uuid;
  const dealershipName = faker.company.companyName();
  const dealershipLocation = faker.address.city();
  const password = faker.internet.password();


  return {
    dealershipEmail,
    dealershipId,
    dealershipName,
    dealershipLocation,
    password
  };
}

// Generate dummy data for the car model
export const generateCar=()=> {
  const type = faker.vehicle.type();
  const name = faker.random.word(); 
  const model = faker.vehicle.model();
  const carInfo = {}; // Additional car information

  return {
    type,
    name,
    model,
    carInfo
  };
}

// Generate dummy data for the deal model
export const generateDeal =() =>{
  const carId = faker.datatype.uuid;
  const dealInfo = {};

  return {
    carId,
    dealInfo
  };
}

// Generate dummy data for the sold vehicle model
export const generateSoldVehicle= () =>{
  const vehicleId = faker.datatype.uuid;
  const carId = faker.datatype.uuid;
  const vehicleInfo = {};

  return {
    vehicleId,
    carId,
    vehicleInfo
  };
}



