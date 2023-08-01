const jwt = require('jsonwebtoken')

module.exports = async function Auth (req, res, next) {
    try {
        const Token = await req.headers.authorization;
        const check = jwt.verify(Token, process.env.TOKEN_SECRET)
        req.body.UserName = check.data
        console.log(req.body.UserName)
        console.log(req.body)
        next();
    } catch (error) {
        res.status(403).json({
            message: "Can not access"
        })
    }
}