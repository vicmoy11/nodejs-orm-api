const { DataTypes } = require('sequelize');


module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        imageUrl: { type: DataTypes.STRING, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true }
    };

    const options = {
    };

    return sequelize.define('Product', attributes, options);
}