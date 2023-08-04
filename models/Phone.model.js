const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  manufacturer: { type: String },
  description: { type: String },
  color: { type: String },
  price: { type: Number },
  imageFileName: { type: String },
  screen: { type: String },
  processor: { type: String },
  ram: { type: String },
});

module.exports = model("Phones", phoneSchema);
