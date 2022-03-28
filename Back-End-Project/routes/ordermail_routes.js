const express = require('express')
const router = express.Router()
const mailController = require('../controllers/ordermail_controller')

router.post('/ordermail', mailController.sendMail)


module.exports = router  

