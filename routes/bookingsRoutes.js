const express = require('express');

const BaseRoutes = require('./baseRoutes');

const router = express.Router();

class BookingsRoutes extends BaseRoutes {
  routes() {
    router.get('/test', this.controller.test.bind(this.controller));
    router.get('/getAll', this.controller.getAll.bind(this.controller));
    router.get('/getOne/:bookingId', this.controller.getOne.bind(this.controller));

    router.post('/newBooking', this.controller.newBooking.bind(this.controller));
    router.delete('/deleteOne/:bookingId', this.controller.deleteOne.bind(this.controller));
    return router;
  }
}

module.exports = BookingsRoutes;
