import { Model } from 'sequelize';

export default function (sequelize, DataTypes) {
  class Quote__Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote__Quote.init(
    {
      QuoteId: DataTypes.INTEGER,
      Name: DataTypes.,
      BornedAt: DataTypes. ,
      E_Image: DataTypes. ,
      DiedAt: DataTypes. ,
      Job: DataTypes. ,
      MajorId: DataTypes. ,
      Twitter: DataTypes. 
    },
    {
      sequelize,
      modelName: 'Quote__Quote',
    },
  );
  return Quote__Quote;
};
