const mongoose = require('mongoose')

const instauserSchema = new mongoose.Schema({
  username: String,
  access_token: String,
  name: String,
  email: String,
  profile_picture: String,
  followers: Number,
  engagement_rate: Number,
  areas_of_expertise: [String],
})

const User = mongoose.model('InstaUser', instauserSchema)

module.exports = User
