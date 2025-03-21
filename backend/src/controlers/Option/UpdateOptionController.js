const ProductModel = require('../../models/ProductModel');
const ProductOptionModel = require('../../models/ProductOptionModel');

module.exports = async (request, response) => {
    let { id, OptionId } = request.params;
    let { title, shape, radius, type, values } = request.body;

    try {

        let product = await ProductModel.findOne({
            where: { id }
        });

        console.log({
            product_id: id, 
            id: OptionId     
        });

        const updatedOption= await ProductOptionModel.update(
            {
                radius,               
                values: values.join()
            },
            {
                where: {
                    product_id: id, 
                    id: OptionId     
                }
            });


        return response.status(204).end();
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Erro ao atualizar opção de produto' });
    }
};
