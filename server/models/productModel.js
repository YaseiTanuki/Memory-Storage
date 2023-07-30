const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    OwnerName: {
        type: String,
        require: true,
    },
    
    Name: {
        type: String
    },

    Description: {
        type: String
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;