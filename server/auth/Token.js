const jwt = require('jsonwebtoken')

module.exports = {
    GenerateToken: (data) => {
        return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: '3600s'});
    }
}