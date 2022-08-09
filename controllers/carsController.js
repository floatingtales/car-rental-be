const BaseController = require('./baseController');

class CarsController extends BaseController {
  constructor(model, db) {
    super(model);
    this.bookings = db.bookings;
  }
}

module.exports = CarsController;
