const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const lobbyController = require('../controllers/lobbyController')

router.post("/logout", homeController.LogOut)


router.get("/album/:id", homeController.LoadPage)
router.post("/album", homeController.UploadPage)

router.post("/product", homeController.UploadProduct)
router.get("/product/:id", homeController.LoadProduct)

module.exports = router;