const express = require('express');

const BaseRoutes = require('./baseRoutes');

const router = express.Router();

class CarsRoutes extends BaseRoutes {
  routes() {
    router.get('/test', this.controller.test.bind(this.controller));
    router.get('/getAll', this.controller.getAll.bind(this.controller));
    return router;
  }
}

module.exports = CarsRoutes;
