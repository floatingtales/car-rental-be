const BaseController = require('./baseController');

class CarsController extends BaseController {
  constructor(model, db) {
    super(model);
    this.bookings = db.bookings;
  }

  test(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.status(200).json({ status: 'test-successful' });
  }
}

module.exports = CarsController;
