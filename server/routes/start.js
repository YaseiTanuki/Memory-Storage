const express = require('express')
const router = express.Router()
const StartController = require('../controllers/startController.js')

router.get("/", StartController.GetStartInfo)

router.get("/register", StartController.GetRegInfo)

router.post("/register", StartController.PostRegInfo)

router.get("/login", StartController.GetLogInfo)

router.post("/login", StartController.PostLogInfo)

module.exports = router;