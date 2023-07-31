const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.post("/logout", homeController.LogOut)

router.get("/album/:id", homeController.LoadPage)
router.post("/album", homeController.UploadPage)
router.delete("/album", homeController.DeleteAlbum)

router.post("/product", homeController.UploadProduct)
router.get("/product/:id", homeController.LoadProduct)
router.delete("/product", homeController.DeleteProduct)

module.exports = router;