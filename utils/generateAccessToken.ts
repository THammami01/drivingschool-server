import jwt from "jsonwebtoken";

const generateAccessToken = (_id: string) => {
  const userData = { _id };
  return jwt.sign(userData, "RQcCaYC26YXkPpEjfXh2mAnZjKcrkDHtGnQ8h7n3RYDYSURZA6");
};

export default generateAccessToken;
