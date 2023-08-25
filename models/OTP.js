const { Schema, model } = require('mongoose')

const otpSchema = new Schema({
  phone: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
})

module.exports = model('OTP', otpSchema)
