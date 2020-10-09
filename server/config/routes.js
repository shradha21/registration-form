const express = require('express')
const router = express.Router()

//const uploads = require('../app/middlewares/imageUploads')

const userController = require('../app/controllers/userController')

router.post('/adduser', uploads.single('image'), userController.create)

module.exports = router