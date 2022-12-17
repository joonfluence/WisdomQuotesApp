'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote__Author__Major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote__Author__Major.init({
    MajorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quote__Author__Major',
  });
  return Quote__Author__Major;
};