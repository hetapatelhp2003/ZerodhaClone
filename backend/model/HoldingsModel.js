const {model}=require("mongoose");

const {HoldingsSchema}=require("../schemas/HoldingSchema.js");

const HoldingsModel= new model("holding",HoldingsSchema);
module.exports={HoldingsModel};