const moment = require('moment');
const BaseController = require('./baseController');

class BookingsController extends BaseController {
  constructor(model, db) {
    super(model);
    this.cars = db.cars;
  }

  async newBooking(req, res) {
    console.log(req.url);
    const {
      carId, startDate, endDate, userEmail, userLname, userFname,
    } = req.body;

    if (!carId || !startDate || !endDate || !userEmail || !userLname || !userFname) {
      return res.status(400).json({ status: 'complete your input' });
    }

    let gotCarFromId;
    try {
      gotCarFromId = await this.cars.findOne({ where: { carId } });
      if (!gotCarFromId) { throw new Error('no car'); }
    } catch (err) {
      return res.status(400).json({ status: 'no car' });
    }

    let allBookings;
    try {
      allBookings = await this.model.findAll({ where: { carId } });
    } catch (err) {
      return res.status(400).json({ status: 'cant get bookings' });
    }

    let gotBookingFlag = false;
    if (allBookings.length > 0) {
      allBookings.forEach((booking) => {
        if (
          (moment(startDate) >= booking.startDate && moment(startDate) <= booking.endDate)
         || (moment(endDate) >= booking.startDate && moment(endDate) <= booking.endDate)
         || (moment(startDate) <= booking.startDate && moment(endDate) >= booking.endDate)) {
          gotBookingFlag = true;
        }
      });
    }
    if (gotBookingFlag) {
      return res.status(400).json({ status: 'got existing booking' });
    }
    const createdBooking = await this.model.create({ ...req.body });

    return res.status(200).json({ status: 'create successful', data: createdBooking });
  }
}

module.exports = BookingsController;
