import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Store extends Model {
  public id!: number;
  public name!: string;
  public ownerId!: number;
}

Store.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Store',
  }
);

export default Store;
