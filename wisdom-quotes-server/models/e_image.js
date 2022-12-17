'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class E_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  E_Image.init({
    ImageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'E_Image',
  });
  return E_Image;
};