const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');
const ProductOptionModel = require('../models/ProductOptionModel');
const UserModel = require('../models/UserModel');

async function execute() {
    await ProductModel.sync();
    await ProductImageModel.sync();
    await CategoryModel.sync();
    await ProductCategoryModel.sync();
    await ProductOptionModel.sync();
    await UserModel.sync();
}
execute();