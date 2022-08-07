/* eslint-disable camelcase */
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface) {
    const randomNumberGenerator = (min, max) => {
      const minNum = !min ? 0 : min;
      const maxNum = !max ? 0 : max;
      const randomNumber = (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
      return randomNumber;
    };
    const carArray = [];

    for (let i = 0; i < 10; i += 1) {
      const car_model = faker.vehicle.model();
      const car_manufacturer = faker.vehicle.manufacturer();
      const car_daily_rate = randomNumberGenerator(50, 150) + 0.5;
      const car_seats = randomNumberGenerator(2, 8);
      const car_image = faker.image.transport(300, 300);
      const car_is_manual = !(randomNumberGenerator(1, 2) % 2);
      const car_vrm = faker.vehicle.vrm();
      const car_fuel = faker.vehicle.fuel();
      const created_at = new Date();
      const updated_at = new Date();
      const randomCar = {
        car_model,
        car_manufacturer,
        car_daily_rate,
        car_seats,
        car_image,
        car_is_manual,
        car_vrm,
        car_fuel,
        created_at,
        updated_at,
      };
      carArray.push(randomCar);
    }
    await queryInterface.bulkInsert('cars', carArray, { returning: true });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('cars', null, {});
  },
};
