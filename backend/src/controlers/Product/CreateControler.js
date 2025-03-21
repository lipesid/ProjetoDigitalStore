const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel');
const ProductOptionsModel = require('../../models/ProductOptionModel');
const ProductCategoryModel = require('../../models/ProductCategoryModel');
const CategoryModel = require('../../models/CategoryModel');  // Certifique-se de que esse modelo esteja importado
const { saveByUrl } = require('../../services/product-images');

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price,
        enabled,
        price_with_discount,
        description,
        stock
    } = request.body;

    let product;

    try {
        // Criando o produto no banco
        product = await ProductModel.create({
            name, slug, price, description, stock, enabled, price_with_discount
        });
    } catch (error) {
        response.status(400);
        return response.json({
            message: "Erro ao criar o produto"
        });
    }

    try {
        let category_ids = [];
        
        // Verifica se todas as categorias existem na tabela Category, e não na tabela ProductCategory
        for (let category of request.body.category_ids) {
            const categoryExists = await CategoryModel.findOne({ where: { id: category } });

            if (!categoryExists) {
                response.status(400);
                return response.json({
                    message: `Categoria com ID ${category} não existe.`
                });
            }

            // Adiciona a relação entre produto e categoria
            category_ids.push({
                product_id: product.id,
                category_id: category
            });
        }

        // Criação da associação entre produto e categorias na tabela product_category
        category_ids = await ProductCategoryModel.bulkCreate(category_ids);
        product.setDataValue('category_ids', category_ids);
        response.status(201);

    } catch (error) {
        console.log(error.message);
        response.status(400);
        return response.json({
            message: "Erro ao criar a relação de categoria"
        });
    }

    // Se existirem imagens, salva as imagens para o produto
    if (request.body.images && request.body.images.length > 0) {
        try {
            let images = [];
            for (let url of request.body.images) {
                let { relativePath } = await saveByUrl({ url, slug });
                images.push({
                    product_id: product.id,
                    path: relativePath
                });
            }

            // Salva as imagens associadas ao produto
            images = await ProductImageModel.bulkCreate(images);
            product.setDataValue('images', images);
            response.status(201);
        } catch (error) {
            console.log(error.message);
            response.status(400);
            return response.json({
                message: "Erro ao salvar imagens no produto " + product.id
            });
        }
    }

    // Se existirem opções, cria as opções para o produto
    if (request.body.options && request.body.options.length > 0) {
        try {
            let options = [];
            for (let option of request.body.options) {
                options.push({
                    product_id: product.id,
                    title: option.title,
                    shape: option.shape,
                    radius: option.radius,
                    type: option.type,
                    values: option.values.join() // Concatena os valores como string
                });
            }

            // Salva as opções associadas ao produto
            options = await ProductOptionsModel.bulkCreate(options);
            product.setDataValue('options', options);
            response.status(201);
        } catch (error) {
            console.log(error.message);
            response.status(400);
            return response.json({
                message: "Erro ao criar as opções do produto"
            });
        }
    }

    // Retorna a resposta com os dados do produto
    return response.json(product);
}
