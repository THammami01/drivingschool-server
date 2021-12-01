import { Request, Response } from "express";
import Monitor from "../models/Monitor";

export const getMonitorsController = async (_req: Request, res: Response) => {
  const monitors = await Monitor.find();
  res.send({ monitors });
};

export const postMonitorController = (req: Request, res: Response) => {
  const newMonitor = new Monitor(req.body);

  newMonitor.save((err: any, results: any) => {
    if (err) res.sendStatus(500);
    else res.send(results);
  });
};

export const putMonitorController = async (req: Request, res: Response) => {
  const { _id } = req.body;
  delete req.body._id;

  await Monitor.findByIdAndUpdate(_id, req.body, (err: any, results: any) => {
    if (err) {
      res.sendStatus(500);
    } else res.send({ status: "Updated" });
  });
};

export const deleteMonitorController = async (
  req: Request,
  res: Response
) => {
  const { _id } = req.params;
  // tslint:disable-next-line: no-console
  console.log("...");
  // tslint:disable-next-line: no-console
  console.log(_id);

  await Monitor.findByIdAndRemove(_id, {}, (err: any, results: any) => {
    if (err) {
      res.sendStatus(500);
    } else res.send({ status: "Deleted" });
  });
};
