const CategoryModel = require('../../models/CategoryModel');

module.exports = async (request, response) => {
    const { name, slug } = request.body;

    // Verificar se os parâmetros necessários estão presentes
    if (!name || !slug) {
        return response.status(400).json({
            message: "Nome e slug são obrigatórios."
        });
    }

    try {
        // Criar uma nova categoria no banco de dados
        const newCategory = await CategoryModel.create({
            name,
            slug
        });

        // Retornar sucesso com a categoria criada
        return response.status(201).json({
            message: "Categoria criada com sucesso.",
            category: newCategory
        });

    } catch (error) {
        console.error("Erro:", error.message);
        return response.status(500).json({
            message: "Erro ao criar categoria."
        });
    }
};
