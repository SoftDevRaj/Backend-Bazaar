// models/tag.js

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Product, {
        through: 'ProductTag',
        foreignKey: 'tag_id'
      });
    }
  }
  Tag.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Tag',
    timestamps: false
  });
  return Tag;
};
