const initCarsModel = (sequelize, DataTypes) => sequelize.define(
  'cars',
  {
    carId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    carModel: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    carManufacturer: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    carDailyRate: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    carSeats: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    carImage: {
      type: DataTypes.STRING,
    },
    carIsManual: {
      type: DataTypes.BOOLEAN,
    },
    carVrm: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    carFuel: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
  },
);

module.exports = initCarsModel;
