module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      car_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      car_model: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      car_manufacturer: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      car_daily_rate: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      car_seats: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      car_image: {
        type: Sequelize.STRING,
      },
      car_is_manual: {
        type: Sequelize.BOOLEAN,
      },
      car_vrm: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      car_fuel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cars');
  },
};
