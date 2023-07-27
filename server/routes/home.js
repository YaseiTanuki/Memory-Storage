const express = require('express')
const router = express.Router()
const User = require('../models/userModel.js')

router.get("/", (req, res) => {
    res.send("Home")
})

router.get("/userinfo", (req,res) => {
    res.send("Userinfo is up!")
})

router.post("/userinfo", async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        console.log(req.body);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;