const { validators } = require("crawlee");
const mongoose = require("mongoose");
const validate = require("validate");
const validator = require("validator");
const answerSchema = new mongoose.Schema({
  // influencersCount: Number,
  // paymentType: [String],
  // cashValue: String,
  // shortDescription: {
  //   type: String,
  // },
  // brandUSPs : {
  //   type : String,
  // },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },

  brandName: {
    type: String,
    default: "",
    required: false,
  },
  yourName: {
    type: String,
    default: "",
    required: false,
  },
  contact: {
    type: String,
    default: "",
    required: false,
  },
  brandInfo: {
    type: String,
    default: "",
    required: false,
  },
  email: {
    type: String,
    validate: (value) => {
      if (validator.isEmail(value)) {
        throw new Error("Email is not Valid");
      }
    },
    required: false,
  },
  brandUsp: {
    type: String,
    default: "",
    required: false,
  },
  shortDescription: {
    type: String,
    default: "",
    required: false,
  },
  brandUsp2: {
    type: String,
    default: "",
    required: false,
  },
});

const Answer = mongoose.model("Brandanswer", answerSchema);

module.exports = Answer;
