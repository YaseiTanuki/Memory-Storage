const express = require('express')
const router = express.Router()
const routerHome = require('./home')
const lobbyController = require('../controllers/lobbyController.js')
const Auth = require('../auth/Auth')

router.get("/", lobbyController.GetStartInfo)

router.get("/register", lobbyController.GetRegInfo)

router.post("/register", lobbyController.PostRegInfo)

router.get("/login", lobbyController.GetLogInfo)

router.post("/login", lobbyController.PostLogInfo)

router.post("/logout", lobbyController.LogOut)

router.use("/home", Auth, routerHome)

module.exports = router;