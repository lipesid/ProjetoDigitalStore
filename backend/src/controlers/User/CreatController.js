const UserModel = require('../../models/UserModel');

module.exports = async (request, response) => {
    try {
        // Tenta criar o usuário com os dados recebidos no corpo da requisição
        let user = await UserModel.create(request.body);
        
        // Retorna o usuário criado em formato JSON como resposta
        return response.json(user);
    } catch (error) {
        // Em caso de erro, exibe no console e retorna um erro 500 (erro interno do servidor)
        console.error("Erro ao criar usuário:", error);
        
        // Retorna uma resposta de erro 500 com uma mensagem
        return response.status(500).json({ error: "Erro ao criar usuário", message: error.message });
    }
};
