const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const lobbyController = require('../controllers/lobbyController')
const Auth = require('../auth/Auth')

router.get("/", lobbyController.CheckURI)

router.get("/album/", homeController.LoadPage)
router.post("/album", homeController.UploadPage)
router.delete("/album", homeController.DeletePage)

router.post("/product", homeController.UploadProduct)
router.get("/product/", homeController.LoadProduct)
router.delete("/product", homeController.DeleteProduct)

router.put("/changepasswd", homeController.ChangePasswd)

module.exports = router;