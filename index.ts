import express, { Application, Request, Response } from "express";
import cors from "cors";
import auth from "./utils/authMiddleware";
import { loginController, verifyTokenController } from "./controllers/auth";
import {
  getMonitorsController,
  postMonitorController,
  putMonitorController,
  deleteMonitorController,
} from "./controllers/monitor";
import "./db";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send({ status: "RUNNING" });
});

app.post("/api/auth/login", loginController);
app.post("/api/auth/verifyToken", verifyTokenController);

app.get("/api/monitor/", auth, getMonitorsController);
app.post("/api/monitor/", auth, postMonitorController);
app.put("/api/monitor/", auth, putMonitorController);
app.delete("/api/monitor/:_id", auth, deleteMonitorController);

app.listen(4000, () => {
  // tslint:disable-next-line: no-console
  console.log("APP IS RUNNING SUCCESSFULLY");
});
