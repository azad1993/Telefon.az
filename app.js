const express = require('express');
const app = express();
const path = require('path');


// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// Set path to views directory
app.set('view engine', 'ejs');

app.listen(3000);

// EXTRACT FORM DATA
app.use(express.urlencoded({
    extended: true
}))

// ROUTES
const indexRoute = require('./routes/index');
const elanRoute = require('./routes/elan');
const detailsRoute = require('./routes/details');
const loginRoute = require('./routes/javascript-login');
const registrationRoute = require('./routes/registration');
const registration2Route = require('./routes/registration2');
const registration3Route = require('./routes/registration3');


// ROUTES MIDDLEWARES
app.use('', indexRoute);
app.use('/elan', elanRoute);
app.use('/details', detailsRoute);
app.use('/javascript-login', loginRoute);
app.use('/registration', registrationRoute);
app.use('/registration2', registration2Route);
app.use('/registration3', registration3Route);