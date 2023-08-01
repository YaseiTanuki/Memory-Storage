const Page = require('../models/pageModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')

module.exports = {
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
        const PageList = await Page.find({UserName: req.body.UserName})
        console.log(req.body.UserName)
        var list = [{}];
        const len = PageList.length
        if(PageList.length != 0){
            list = PageList.map((page) => page.toObject());
            res.status(200).json({message: "Sent Page", list, len})
        }
        else{
            res.status(200).json({message: "No page found", list});
        }
    },

    DeletePage: async function(req, res) {
        try {
            Page.deleteOne({UserName: req.body.UserName, Title: req.body.Title}).then(() => {
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
        console.log(req.body)
        const ProductList = await Product.find({UserName: req.body.UserName})
        console.log(req.body.UserName)
        console.log(ProductList.length)
        var list = [{}];
        if(ProductList.length !=0 ){ 
            list = ProductList.map((product) => product.toObject());
            res.status(200).json({message: "Sent", list})
        }
        else{
            res.status(200).json({message: "No Product found", list});
        }
    },

    DeleteProduct: async function(req, res){
        console.log(req.body.UserName)
        console.log(req.body.Name)
        try {
            await Product.deleteOne({UserName: req.body.UserName, Name: req.body.Name}).then(() => {
                console.log("Deleted:" + req.body.Name)
                res.status(200).json({message: "Deleted product"})
            })
        } catch (error) {
            console.log(error)
        }
    },

    ChangePasswd: async function(req, res) {
        try {
            const doc = await User.findOneAndUpdate({UserName: req.body.UserName, Password: req.body.OldPasswd}, {Password: req.body.NewPasswd}, {new: true})
            if(!doc){
                return res.status(403).json({message: "Incorrect Password"})
            }
            console.log("Update Password for " + req.body.UserName)
            return res.status(200).json({message: "Updated!"})
        } catch (error) {
            console.log(error)
            return res.status(202).json({message: "Fail to update"})
        }
    }
}