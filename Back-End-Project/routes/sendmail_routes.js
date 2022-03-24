const express = require('express')
const router = express.Router()
const mailController = require('../controllers/sendmail_controller')

router.post('/sendmail', mailController.sendMail)


module.exports = router