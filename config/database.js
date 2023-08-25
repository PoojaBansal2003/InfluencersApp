// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose')

const { MONGO_URI } = process.env

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database')
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...')
      console.error(error.message)
      process.exit(1)
    })
}
