import { NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authMiddleware: RequestHandler = (req: any, res: any, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token == null) return res.sendStatus(401); // UNAUTHORIZED

  jwt.verify(
    token,
    "RQcCaYC26YXkPpEjfXh2mAnZjKcrkDHtGnQ8h7n3RYDYSURZA6",
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

export default authMiddleware;
