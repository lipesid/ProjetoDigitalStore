const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    try {
        const { id } = request.params;
       
        // Procurando o produto no banco pelo id
        const product = await ProductModel.findOne({ where: { id } });
        
        // Se o produto não for encontrado, retorna um erro 404
        if (!product) {
            return response.status(404).json({ error: 'Produto não encontrado' });
        }

        let createOptionsCount = 0; 
        
        // Laço para processar cada opção de produto
        for (let optionData of request.body) {
            
            // Preparando o objeto da opção para ser inserido
            const option = {
                product_id: product.id,
                title: String(optionData.title),
                shape: optionData.shape,
                radius: isNaN(Number(optionData.radius)) ? 0 : Number(optionData.radius), // Verificando se o raio é um número válido
                type: optionData.type,
                values: optionData.values.join(', '),  // Unindo os valores em uma string separada por vírgulas
            };

            // Criando a opção no banco de dados
            const createdOption = await ProductOptionModel.create(option);

            // Verifica se a opção foi criada com sucesso
            if (createdOption) {
                createOptionsCount++;
            }
        }

        // Verifica se ao menos uma opção foi criada
        if (createOptionsCount === 0) {
            return response.status(404).json({ error: 'Nenhuma opção de produto foi criada' });
        }

        // Retorna sucesso com a quantidade de opções criadas
        return response.status(200).json({ message: `${createOptionsCount} opção(s) de produto(s) criada(s) com sucesso` });

    } catch (error) {
        // Captura e loga qualquer erro ocorrido durante o processo
        console.error('Erro ao criar opções do produto:', error);
        return response.status(500).json({ error: 'Erro ao criar as opções do produto' });
    }
};
