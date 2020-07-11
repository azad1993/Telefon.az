const express = require('express');
const app = express();
const path = require('path');


// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// Set path to views directory
app.set('view engine', 'ejs');

app.listen(3000);

// ROUTES
const indexRoute = require('./routes/index');
const elanRoute = require('./routes/elan');

// ROUTES MIDDLEWARES
app.use('', indexRoute);
app.use('/elan', elanRoute);