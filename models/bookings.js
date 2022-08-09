const initBookingsModel = (sequelize, DataTypes) => sequelize.define(
  'bookings',
  {
    bookingId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    carId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    userEmail: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userFname: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userLname: {
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
