module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      booking_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      car_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_fname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_lname: {
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
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface) {
    await queryInterface.dropTable('bookings');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
