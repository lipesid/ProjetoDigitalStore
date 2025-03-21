const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    let options = await ProductOptionModel.findAll({
        attributes: ['id', 'path'],
        where: {
            product_id: request.params.id
        }
    });

    response.json(images);
}