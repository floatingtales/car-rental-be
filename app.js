const express = require('express');
const cookieParser = require('cookie-parser');

const db = require('./models/index');

const CarsController = require('./controllers/carsController');

const CarsRoutes = require('./routes/carsRoutes');

const app = express();

const carsController = new CarsController(db.cars, db);

const carsRoutes = new CarsRoutes(carsController).routes();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use('/api/cars', carsRoutes);

app.get('*', (req, res) => {
  console.log(req.url);
  res.status(404).json({ status: 'error - wrong url' });
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => { console.log(`app is running in port ${PORT}`); });
