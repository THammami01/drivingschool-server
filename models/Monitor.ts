import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose as any);

const schema = new mongoose.Schema(
  {
    // _id: Schema.Types.ObjectId,
    saveDate: { type: Date, default: Date.now },

    personalCode: String, // Code personnel
    nicNumber: String, // CIN
    lastname: String, // Nom
    firstname: String, // Prénom
    birthday: String, // Date de naissance
    address: String, // Adresse
    mobile: String, // Mobile
    personalFunction: String, // Fonction personnel
    recruitingDate: String, // Date de recrutement
    qualification: String, // Qualification
    numberOfLeaveDaysByYear: String, // Jours de congé par an
    grossSalary: String, // Salaire brut
    cnssNumber: String, // Numéro CNSS
    cnssWithholdingRate: String, // Taux de retenue CNSS
    taxesRate: String, // Taux de charge patronale
    withholdingTaxRate: String, // Taux de retenue à la source
    netBalance: String, // Salaire net
    balance: String, // Solde
    enteredBy: String, // Saisi par
    enteredAt: String, // Saisi le
  },
  {
    versionKey: false,
  }
);

schema.plugin(autoIncrement.plugin, { model: "Monitor", startAt: 1 });
export default mongoose.model("Monitor", schema);
