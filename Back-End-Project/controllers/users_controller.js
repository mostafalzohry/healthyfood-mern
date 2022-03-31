// // const User = require('../models/users')
// // const bcrypt = require('bcryptjs')
// // const jwt = require('jsonwebtoken')
// // const asyncHandler = require('express-async-handler')

// //   const registration = asyncHandler(async(req, res)=>{
// //     const { username, email, password } = req.body
// //     if (!username || !email || !password) {
// //       res.status(400)
// //       throw new Error('Please add all fields')
// //     }

// //     const userExists = await User.findOne({email})
// //     if (userExists) {
// //       res.status(400)
// //       throw new Error('User already exists')
// //     }

// //     const salt = await bcrypt.genSalt(10)
// //     const hashedPassword = await bcrypt.hash(password, salt)

// //     const user = await User.create({
// //       username,
// //       email,
// //       password: hashedPassword,
// //     })

// //     if (user) {
// //       res.json({
// //         _id: user.id,
// //         username: user.username,
// //         email: user.email,
// //         token: generateToken(user._id),
// //       })
// //     } else {
// //       res.status(400)
// //       throw new Error('Invalid user data')
// //     }
// //   })

// //   const login = asyncHandler(async (req, res) => {
// //     const { email, password } = req.body
  
// //     const user = await User.findOne({ email })
  
// //     if (user && (await bcrypt.compare(password, user.password))) {
// //       res.json({
// //         _id: user.id,
// //         username: user.username,
// //         email: user.email,
// //         token: generateToken(user._id),
// //       })
// //     } else {
// //       res.status(400)
// //       throw new Error('Email or Password Incorrect')
// //     }
// //   })

// //   const profile = asyncHandler(async (req, res) => {
// //     res.status(200).json(req.user)
// //   })

// //   const generateToken = (id) => {
// //     return jwt.sign({ id }, process.env.JWT_SECRET, {
// //       expiresIn: '30d',
// //     })
// //   }

// //   const countUsers = asyncHandler(async (req, res) => {
// //     User.find().count({})
// //     .then(data => {
// //       res.send({
// //         message: `${data}`
// //       });
// //     })
// //     .catch(err => {
// //       res.status(500).send({
// //         message:err.message || "Some error occurred while counting all Users."});
// //     });
// //   })
// //   const allUsers = asyncHandler(async (req, res) => {
// //     const name = req.query.name;
// //     var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
// //     User.find(condition)
// //     .then(data => {
// //       res.send(data);
// //     })
// //     .catch(err => {
// //       res.status(500).send({
// //         message:err.message || "Some error occurred while retrieving User."
// //       });
// //     });
// //   })


// //   module.exports = {registration , login , profile , allUsers , countUsers}             

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
//       res.json({
//         _id: user.id,
//         username: user.username,
//         email: user.email,
//         token: generateToken(user._id),
//       })
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

//   const countUsers = asyncHandler(async (req, res) => {
//     User.find().count({})
//     .then(data => {
//       res.send({
//         message: `${data}`
//       });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:err.message || "Some error occurred while counting all Users."});
//     });
//   })
//   const allUsers = asyncHandler(async (req, res) => {
//     const name = req.query.name;
//     var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
//     User.find(condition)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:err.message || "Some error occurred while retrieving User."
//       });
//     });
//   })

//   const Delete = asyncHandler(async(req, res) => {
//     const id = req.params.id;
//     User.findByIdAndRemove(id)
//       .then(data => {
//         if (!data) {
//           res.status(404).send({message: `Cannot User with id=${id}. Maybe User was not found!`});
//         } else {
//           res.send({
//             message: "User was deleted successfully!"
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({message: "Could not delete User with id=" + id});
//       });
//   })

//   const findOne = asyncHandler(async(req, res) => {
//     const id = req.params.id;
//     User.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Tutorial with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({ message: "Error retrieving User with id=" + id });
//     });
//   })

//   const update = asyncHandler(async(req, res) =>{
//     if (!req.body) {
//       return res.status(400).send({message: "Data to update can not be empty!"});
//     }
//     const id = req.params.id;
//     User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update Tutorial with id=${id}. Maybe user was not found!`
//           });
//         } else res.send({ message: "user was updated successfully." });
//       })
//       .catch(err => {
//         res.status(500).send({message: "Error updating user with id=" + id});
//       });
//   })

//   module.exports = {registration , login , profile , allUsers , countUsers , Delete , findOne , update}  



const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

  const registration = asyncHandler(async(req, res)=>{
    const { username, email, password , isAdmin } = req.body
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
      isAdmin
    })

    if (user) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        isAdmin:user.isAdmin,
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
        isAdmin:user.isAdmin,
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

  const Delete = asyncHandler(async(req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({message: `Cannot User with id=${id}. Maybe User was not found!`});
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({message: "Could not delete User with id=" + id});
      });
  })

  const findOne = asyncHandler(async(req, res) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving User with id=" + id });
    });
  })

  const update = asyncHandler(async(req, res) =>{
    if (!req.body) {
      return res.status(400).send({message: "Data to update can not be empty!"});
    }
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe user was not found!`
          });
        } else res.send({ message: "user was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({message: "Error updating user with id=" + id});
      });
  })

  module.exports = {registration , login , profile , allUsers , countUsers , Delete , findOne , update}