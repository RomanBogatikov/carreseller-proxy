const express = require('express');
// body-parser extracts body of request
const bodyParser = require('body-parser');
// path provides utilities for working with file and directory paths
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Database connection
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost:27017/cars';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
});

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// Serve any static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Controllers
const carsController = require('./controllers/cars');
app.use('/cars', carsController);

// // index route for testing purposes
// app.get('/', (req, res) => {
//   console.log(req.headers);
//   res.send('hello cars');
// });



//  seed route (to seed cars into the database)

app.get('/seed', (req, res) => {
  console.log('seed');
  Car.create([
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },

  ])
})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
