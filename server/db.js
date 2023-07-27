const mongoose = require('mongoose')

module.exports = {
ConnectDb: () => {
    try {
        mongoose.connect(process.env.URI)
        console.log("Connected to database");
    } catch(e) {
        console.log(e);
    }
}}