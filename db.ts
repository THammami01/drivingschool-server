import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default mongoose
  .connect(process.env.LOCAL_MONGODB_URI as string)
  .then(() => {
    // tslint:disable-next-line: no-console
    console.log("MongoDB Connection Initialized");
  })
  .catch((err) => {
    // tslint:disable-next-line: no-console
    console.log(err);
  });

mongoose.connection.on("connected", () => {
  // tslint:disable-next-line: no-console
  console.log("Connected to DB...");
});

mongoose.connection.on("error", (err) => {
  // tslint:disable-next-line: no-console
  console.log("Error in DB Connection...");
  // tslint:disable-next-line: no-console
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  // tslint:disable-next-line: no-console
  console.log("Disconnected from DB...");
});
