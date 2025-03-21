const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken');

module.exports = async (request, response, next) => {
    let token = request.headers.authorization?.replace('Bearer ', '');

    
    try{
        if(!token) {
        throw new Error("Token não enviado na requisição")    
        }

        let decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded);
        let user = await UserModel.findByPk(decoded.id);
        if(!user?.id) {
            throw new Error("ussuario não encontrado");
        }
    } catch(error){
        return response.json({
            message: "Você não tem autorização para acessar este recurso"
    })
    }

    next();
}