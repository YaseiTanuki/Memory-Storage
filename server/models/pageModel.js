const mongoose = require('mongoose')

const pageSchema = new mongoose.Schema({
    OwnerName: {
        type: String,
        require: true,
    },
    
    Title: {
        type: String
    },

    Image: {
        type: String,
        require: true
    },

    Description: {
        type: String
    }
})

const Page = mongoose.model("Page", pageSchema)

module.exports = Page;