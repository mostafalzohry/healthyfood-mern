const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foodSchema = new Schema({
  name: {
    type: String
  },
  details: {
    type: String
  },
  Recipeinfo:{
    type: Object
  },
  image:{
    type: String
  },
  NutritionInfo:{
    type: Object
  },
  Ingredients:{
    type: String
  },
  category:{
    type: String
  },
  price:{
    type: String
  }
},{versionKey: false})

const Food = mongoose.model('Foods', foodSchema)

module.exports = Food;
