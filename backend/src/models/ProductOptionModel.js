const connection = require('../database/connection');
const {DataTypes} = require('sequelize');

const ProductOptionModel = connection.define("ProductOptionModel", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
            model: {
                tableName: "product"
            },
            key: 'id'
        }
    },
    title: DataTypes.STRING(20),
    shape: DataTypes.ENUM("square", "circle"),
    radius:  {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        allowNull: false
    },
    type: DataTypes.ENUM("text", "color"),
    values: DataTypes.STRING(255)
}, {
    tableName: 'product_option'
});

module.exports = ProductOptionModel;
