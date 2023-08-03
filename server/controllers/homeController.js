const Page = require('../models/pageModel')
const Product = require('../models/productModel')
const User = require('../models/userModel')

module.exports = {
    UploadPage: async function(req, res){
        try {
            const newPage = await Page.create(req.body)
            console.log("New page created");
            res.json({message: "Saved new image", status: "OK"})
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
            res.json({message: "Sent Page", status: "OK", list, len})
        }
        else{
            res.json({message: "No page found", status: "NOT OK", list});
        }
    },

    DeletePage: async function(req, res) {
        try {
            Page.deleteOne({UserName: req.body.UserName, Title: req.body.Title}).then(() => {
                console.log("Deleted:" + req.body.Title)
                res.json({message: "Deleted page", status: "OK"})
            })
        } catch (error) {
            console.log(error)
            res.json({message: "Error occured", status: "NOT OK"});
        }
    },

    UploadProduct: async function(req, res){
        try {
            const newProduct = await Product.create(req.body)
            console.log("New product created");
            res.json({message: "Saved new product", status: "OK"})
        } catch (error) {
            console.log(error)
            res.json({message: "Error occured", status: "NOT OK"});
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
            res.json({message: "Sent", status: "OK", list})
        }
        else{
            res.json({message: "No Product found", status: "NOT OK", list});
        }
    },

    DeleteProduct: async function(req, res){
        console.log(req.body.UserName)
        console.log(req.body.Name)
        try {
            await Product.deleteOne({UserName: req.body.UserName, Name: req.body.Name}).then(() => {
                console.log("Deleted:" + req.body.Name)
                res.json({message: "Deleted product", status: "OK"})
            })
        } catch (error) {
            console.log(error)
            res.json({message: "Error occured", status: "NOT OK"});
        }
    },

    ChangePasswd: async function(req, res) {
        try {
            const doc = await User.findOneAndUpdate({UserName: req.body.UserName, Password: req.body.OldPasswd}, {Password: req.body.NewPasswd}, {new: true})
            if(!doc){
                return res.json({message: "Incorrect Password", status: "NOT OK"})
            }
            console.log("Update Password for " + req.body.UserName)
            return res.json({message: "Updated!", status: "OK"})
        } catch (error) {
            console.log(error)
            return res.status(202).json({message: "Fail to update", status: "NOT OK"})
        }
    }
}