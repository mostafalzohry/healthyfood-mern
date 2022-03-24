const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/users')

const protect = asyncHandler(async (req, res, next) => {
  let token;
console.log(req.headers.authorization)
  if (
    !req.headers.authorization &&
    !req.headers.authorization.startsWith('Bearer ')
  ){
    return res.send('no auth')
  } 


    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      console.log(token)
      if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()}



     catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }


)

module.exports = { protect }
