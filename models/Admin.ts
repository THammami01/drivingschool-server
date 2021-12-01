import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: String, // Adresse
    password: String, // Mot de passe
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Admin", schema);
