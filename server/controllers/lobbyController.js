const User = require('../models/userModel.js')
const TokenMethod = require('../auth/Token.js')

module.exports = {

    CheckURI: function (req, res){
        res.json({message: "Yes, I'm alive", status: "OK"})  
    },

    Register: async function(req, res){
        try {
            const newUser = await User.create(req.body)
            console.log(req.body);
            res.json({message: "New user created", status: "OK"})
        } catch (error) {
            console.log(error)
        }
    },

    Login: async function(req, res){
        const LoggedUser = await User.findOne({UserName: req.body.UserName, Password: req.body.Password})
        if(LoggedUser==null){
            console.log("Hic, you entered incorrect infomation")
            return res.json({message: "Invalid Infomation", status: "NOT OK"})
        }
        else{
            const token = TokenMethod.GenerateToken({data: req.body.UserName})
            console.log("Success")
            res.status(200).json({message: "Login successfully", status: "OK", token: token})
            const session = req.session
            session.userid = req.body.UserName;
            console.log(session.userid);
        }
    },

    LogOut: async function(req, res){
        res.json({message: "Logout successfully", status: "OK"})
        console.log("Logout");
    },
}