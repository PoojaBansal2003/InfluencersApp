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

  influencer: {
    type: String,
    default: "",
    required: false,
  },
  paymentType: [
    {
      type: String,
      default: "",
      required: false,
    },
  ],
  price: {
    type: Number,
    default: 0,
    required: false,
  },
  targetingGender: [
    {
      type: String,
      default: "",
      required: false,
    },
  ],
  targetFollower: {
    type: String,
    default: "",
    required: false,
  },
  targetCategories: {
    type: String,
    default: "",
    required: false,
  },
  targetCategoriesInfluencer: [
    {
      type: String,
      default: "",
      required: false,
    },
  ],
  ageGroup: {
    type: String,
    default: "",
    required: false,
  },
  productLink: {
    type: String,
    default: "",
    required: false,
  },
  campaignTime: {
    type: String,
    default: "",
    required: false,
  },
  eligibleCriteria: {
    type: String,
    default: "",
    required: false,
  },
  anyMessage: {
    type: String,
    default: "",
    required: false,
  },
  alternativeEmail: {
    type: String,
    default: "",
    required: false,
  },
});

const Campaignanswer = mongoose.model("Answer", answerSchema);

module.exports = Campaignanswer;
