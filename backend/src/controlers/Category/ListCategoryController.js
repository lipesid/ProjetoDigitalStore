const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    let categorias = await CategoryModel.findAll({
        attributes: ['id', 'path'],
        where: {
            category_id: request.params.id
        }
    });

    response.json(categorias);
}