const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {// define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,  //Set as primary key
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {  //References the Product model's id.
        model: 'Product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {  //References the Tag model's id.
        model: 'Tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
