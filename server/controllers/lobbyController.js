const User = require('../models/userModel.js')
const TokenMethod = require('../auth/Token.js')

module.exports = {

    CheckURI: function (req, res){
        res.send("Yes, I'm alive")  
    },

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
            console.log("Hic, you entered incorrect infomation")
            return res.status(401).json({error: "Invalid Infomation"})
        }
        else{
            const token = TokenMethod.GenerateToken({data: req.body.UserName})
            console.log("Success")
            res.status(200).json({message: "Logged", token: token})
            const session = req.session
            session.userid = req.body.UserName;
            console.log(session.userid);
        }
    },

    LogOut: async function(req, res){
        res.status(200).json({message: "You are logged out"})
        console.log("Logout");
    },
}