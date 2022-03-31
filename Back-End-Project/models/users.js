// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// },{timestamps: true})

// const User = mongoose.model('users', userSchema)

// module.exports = User; 


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin:{
    type: String,
  }
},{timestamps: true})

const User = mongoose.model('users', userSchema)

module.exports = User;
