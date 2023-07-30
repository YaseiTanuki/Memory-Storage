const Page = require('../models/pageModel')

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
        if(PageList){
            const data = PageList.map((page) => page.toObject());
            res.status(200).json({message: "Sent", data})
        }
        else{
            res.send("No page found");
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
}