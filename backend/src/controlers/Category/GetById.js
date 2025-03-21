const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    console.log(request.params.id);
    let category = await CategoryModel.findOne({
        where: {
            id: request.params.id
        }
    });
    

    return response.json(category);
}