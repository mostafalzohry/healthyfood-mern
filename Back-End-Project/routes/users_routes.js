const userController = require('../controllers/users_controller')
const { protect } = require('../middleware/authMiddleware')
const express = require('express')
const router = express.Router()

  // create
  router.post('/register', userController.registration)
  router.post('/login', userController.login)
  router.get('/profile', protect , userController.profile)


  router.get('/count-users' , userController.countUsers)
  router.get('/users-all' , userController.allUsers)

  module.exports = router

