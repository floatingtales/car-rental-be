const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');

require('dotenv').config();

const db = require('./models/index');

const CarsController = require('./controllers/carsController');
const BookingsController = require('./controllers/bookingsController');

const CarsRoutes = require('./routes/carsRoutes');
const BookingsRoutes = require('./routes/bookingsRoutes');

const app = express();

const carsController = new CarsController(db.cars, db);
const bookingsController = new BookingsController(db.bookings, db);

const carsRoutes = new CarsRoutes(carsController).routes();
const bookingsRoutes = new BookingsRoutes(bookingsController).routes();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(cors({
  credentials: true,
  origin: FRONTEND_URL,
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use('/api/cars', carsRoutes);
app.use('/api/bookings', bookingsRoutes);

app.get('*', (req, res) => {
  console.log(req.url);
  res.status(404).json({ status: 'error - wrong url' });
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => { console.log(`app is running in port ${PORT}`); });
