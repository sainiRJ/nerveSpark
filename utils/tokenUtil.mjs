import  Jwt  from "jsonwebtoken";

// Generate JWT token
 const generateToken = (userEmail)=> {
  const token = jwt.sign({ user_email: userEmail }, 'your_secret_key');
  return token;
}

// Verify JWT token
  const verifyToken= (token)=> {
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    return decoded;
  } catch (err) {
    return null;
  }
}

export default {generateToken, verifyToken}