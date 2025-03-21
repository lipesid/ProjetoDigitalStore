const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    let { id, OptionId } = request.params;
    

    try {

        let product = await ProductModel.findOne({
            where: { id }
        });

        

        const deletedOption= await ProductOptionModel.destroy(
                {
                where: {
                    product_id: id, 
                    id: OptionId     
                }
            });


            return response.status(204).end();
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Erro ao deletar opção de produto' });
        }
};
