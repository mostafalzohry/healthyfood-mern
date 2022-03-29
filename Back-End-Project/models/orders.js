const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  phone:{
    type: String
  },
  location:{
    type: String
  },
  orders:{
    type: Array
  },
  total:{
    type: Number
  },
},{versionKey: false})

const Order = mongoose.model('Orders', orderSchema)

module.exports = Order;