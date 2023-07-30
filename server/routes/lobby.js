const express = require('express')
const router = express.Router()
const routerHome = require('./home')
const lobbyController = require('../controllers/lobbyController.js')

router.get("/", lobbyController.GetStartInfo)

router.get("/register", lobbyController.GetRegInfo)

router.post("/register", lobbyController.PostRegInfo)

router.get("/login", lobbyController.GetLogInfo)

router.post("/login", lobbyController.PostLogInfo)

router.use("/home", routerHome)

module.exports = router;