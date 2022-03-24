// const User = require('../models/users')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const asyncHandler = require('express-async-handler')


//   const registration = asyncHandler(async(req, res)=>{
//     const { username, email, password } = req.body
//     if (!username || !email || !password) {
//       res.status(400)
//       throw new Error('Please add all fields')
//     }

//     const userExists = await User.findOne({email})
//     if (userExists) {
//       res.status(400)
//       throw new Error('User already exists')
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const user = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//     })

//     if (user) {
//       res.json({message : "Successful Registration"})
//     } else {
//       res.status(400)
//       throw new Error('Invalid user data')
//     }
//   })

//   const login = asyncHandler(async (req, res) => {
//     const { email, password } = req.body
  
//     const user = await User.findOne({ email })
  
//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({
//         _id: user.id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       })
//     } else {
//       res.status(400)
//       throw new Error('Email or Password Incorrect')
//     }
//   })

//   const profile = asyncHandler(async (req, res) => {
//     res.status(200).json(req.user)
//   })

//   const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//       expiresIn: '30d',
//     })
//   }

//   module.exports = {registration , login , profile}

const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')


  const registration = asyncHandler(async(req, res)=>{
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({email})
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    if (user) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  })

  const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await User.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Email or Password Incorrect')
    }
  })

  const profile = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  })

  const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
  }

  const countUsers = asyncHandler(async (req, res) => {
    User.find().count({})
    .then(data => {
      res.send({
        message: `${data}`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while counting all Users."});
    });
  })
  const allUsers = asyncHandler(async (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:err.message || "Some error occurred while retrieving User."
      });
    });
  })




  module.exports = {registration , login , profile , allUsers , countUsers}