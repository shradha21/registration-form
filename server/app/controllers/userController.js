const User = require('../models/user')
const userController = { }

//create the user
userController.create = (req,res) => {
    const body = req.body
    const photo = new photo(body)
    photo.photo = req.file.path

    photo.save()
     .then((photo) => {
         res.json(photo)
     })
     .catch((err) => {
         res.json(err)
     })

}

module.exports = userController
