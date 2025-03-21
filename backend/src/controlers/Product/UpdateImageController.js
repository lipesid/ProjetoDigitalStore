const ProductImageModel = require('../../models/ProductImageModel');
const ProductModel = require('../../models/ProductModel');
const { saveByUrl } = require('../../services/product-images');

module.exports = async (request, response) => {
    let { id, imageId } = request.params;

    try {
        // Verificar se o produto existe
        const product = await ProductModel.findOne({ where: { id } });

        if (!product) {
            return response.status(404).json({ error: 'Produto não encontrado' });
        }

        // Validar a URL da imagem
        const imageUrl = request.body.url;
        if (!imageUrl || !/^https?:\/\/.+/i.test(imageUrl)) {
            return response.status(400).json({ error: 'URL da imagem inválida' });
        }

        // Tentar salvar a imagem
        const image = await saveByUrl({ url: imageUrl, slug: product.slug });

        // Atualizar a imagem do produto
        await ProductImageModel.update(
            { path: image.relativePath },
            { where: { product_id: id, id: imageId } }
        );

        return response.status(204).end();
    } catch (error) {
        console.error('Error updating product image:', error.message);
        return response.status(500).json({ error: 'Erro ao atualizar imagem do produto' });
    }
};
