const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    console.log(request.params.id);
    let user = await UserModel.findOne({
        where: {
            id: request.params.id
        }
    });
    

    return response.json(user);
}