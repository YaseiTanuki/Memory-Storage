const mongoose = require('mongoose')

const uri = "mongodb+srv://Tester:Tester007@memorystorage.kpodsrb.mongodb.net/"

module.exports = {
ConnectDb: () => {
    try {
        mongoose.connect(uri)
        console.log("Connected to database");
    } catch(e) {
        console.log(e);
    }
}}