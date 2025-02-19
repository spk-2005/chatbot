const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  userType: { type: String, required: true },  // E.g., Farmer, Agronomist
  dob: { type: String, default: "" },
  gender: { type: String, default: "" },
  aadharNumber: { type: String, default: "" },
  mobileNumber: { type: String, default: "" },
  address: {
    state: { type: String, default: "" },
    district: { type: String, default: "" },
    mandal: { type: String, default: "" },
    townVillage: { type: String, default: "" },
    pincode: { type: String, default: "" },
  },
  landDetails: {
    acres: { type: Number, default: 0 },
    soilType: {
      type: String,
      enum: ["Alluvial", "Black", "Laterite", "Arid", "Saline", "Alkaline"],
      default: "Alluvial",
    },
    primaryCrops: { type: String, default: "" },
    secondaryCrops: { type: String, default: "" },
  },
  previousInvestment: { type: Number, default: 0 },
  profitLoss: {
    type: String,
    enum: ["Profit", "Loss"],
    default: "Profit",
  },
});

module.exports = mongoose.model("User", userSchema);
