
const ProductModel = require('../models/productModel')

//Get products API-/api/v1/product

exports.getProducts = async (req, res, next) => {
    const products = await ProductModel.find({})
    res.json({
        success: true,
        products
    })
}


//get singleProduct API- /api/v1/product/:id

exports.getSingleProducts = async (req, res, next) => {
    console.log(req.params.id, 'ID')
    try {
        const product = await ProductModel.findById(req.params.id)
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'unable to get product with that id'
        })
    }

}

