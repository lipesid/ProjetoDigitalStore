const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const ProductOptionModel = require('../../models/ProductOptionModel');


module.exports = async(request, response) => {
   
    let products = await ProductModel.findAll({
        include:[ {
            model: ProductImageModel,
            as: 'images'
        },{
            model: ProductOptionModel,
            as : 'options'
        }]
    });
    return response.json(products);
}