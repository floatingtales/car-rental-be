const initBookingsModel = (sequelize, DataTypes) => sequelize.define(
  'cars',
  {
    booking_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    car_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    user_email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user_fname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user_lname: {
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

module.exports = initBookingsModel;
