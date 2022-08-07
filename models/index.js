const Sequelize = require('sequelize');

const initBookingsModel = require('./bookings');
const initCarsModel = require('./cars');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.cars = initCarsModel(sequelize, Sequelize.DataTypes);
db.bookings = initBookingsModel(sequelize, Sequelize.DataTypes);

db.cars.hasMany(db.bookings);
db.bookings.belongsTo(db.cars);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
