const express = require('express')
const router = express.Router()
const routerHome = require('./home')
const lobbyController = require('../controllers/lobbyController.js')
const Auth = require('../auth/Auth')

router.get("/", lobbyController.CheckURI)

router.post("/register", lobbyController.Register)

router.post("/login", lobbyController.Login)

router.post("/logout", lobbyController.LogOut)

router.use("/home", Auth, routerHome)

module.exports = router;