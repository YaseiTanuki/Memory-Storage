const User = require('../models/userModel.js')

module.exports = {
    GetStartInfo: function (req, res){
    res.send("Start is up!")
    },

    GetRegInfo: function (req,res){
        res.send("register is up!")
    },

    PostRegInfo: async function(req, res){
        try {
            const newUser = await User.create(req.body)
            console.log(req.body);
            res.send(req.body)
        } catch (error) {
            console.log(error)
        }
    },

    GetLogInfo: function (req,res){
        res.send("login is up!")
    },

    PostLogInfo: async function(req, res){
        const LoggedUser = await User.findOne({UserName: req.body.UserName, Password: req.body.Password})
        if(LoggedUser==null){
            console.log("Hic")
            return res.status(401).json({error: "Invalid Infomation"})
        }
        else{
            console.log("Success")
            return res.status(200).json({message: "Logged"})
        }
    }
}