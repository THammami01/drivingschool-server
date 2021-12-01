import { Request, Response } from "express";
import Admin from "../models/Admin";
import generateAccessToken from "../utils/generateAccessToken";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({
    $and: [{ email }, { password }],
  });

  if (user)
    res.send({
      statusCode: 200,
      accessToken: generateAccessToken(user._id),
    });
  else res.send({ statusCode: 401 }); // Unauthorized
};

export const verifyTokenController = async (req: any, res: Response) => {
  const { _id } = req.user;

  const user = await Admin.findById(_id);
  if (user)
    res.send({
      statusCode: 200,
    });
  else res.send({ statusCode: 404 });
};
