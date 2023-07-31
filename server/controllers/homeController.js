const Page = require('../models/pageModel')
const Product = require('../models/productModel')

module.exports = {
    LogOut: async function(req, res){
        await req.session.destroy();
        res.status(200).json({message: "You are logged out"})
        console.log("Logout. Session destroyed");
    },

    UploadPage: async function(req, res){
        try {
            const newPage = await Page.create(req.body)
            console.log("New page created");
            res.status(200).json({message: "Saved new image"})
        } catch (error) {
            console.log(error)
        }
    },

    LoadPage: async function(req, res){
        const PageList = await Page.find({OwnerName: req.params.id})
        console.log(req.params.id)
        if(PageList.length){
            const data = PageList.map((page) => page.toObject());
            res.status(200).json({message: "Sent", data})
        }
        else{
            res.send("No page found");
        }
    },

    DeleteAlbum: async function(req, res) {
        try {
            Page.deleteOne({OwnerName: req.body.OwnerName, Title: req.body.Title}).then(() => {
                console.log("Deleted:" + req.body.Title)
                res.status(200).json({message: "Deleted page"})
            })
        } catch (error) {
            console.log(error)
        }
    },

    UploadProduct: async function(req, res){
        try {
            const newProduct = await Product.create(req.body)
            console.log("New product created");
            res.status(200).json({message: "Saved new product"})
        } catch (error) {
            console.log(error)
        }
    },

    LoadProduct: async function(req, res){
        const ProductList = await Product.find({OwnerName: req.params.id})
        console.log(req.params.id)
        console.log(ProductList.length)
        if(ProductList.lenght !=0 ){ 
            const data = ProductList.map((product) => product.toObject());
            res.status(200).json({message: "Sent", data})
        }
        else{
            res.status(404).send("No Product found");
        }
    },

    DeleteProduct: async function(req, res){
        try {
            Product.deleteOne({OwnerName: req.body.OwnerName, Name: req.body.Name}).then(() => {
                console.log("Deleted:" + req.body.Name)
                res.status(200).json({message: "Deleted product"})
            })
        } catch (error) {
            console.log(error)
        }
    }
}