require('dotenv').config();
const {PORT} = process.env;

const express = require('express');
const path = require('path');
const apiKey = require('./lib/apikey');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
//app.use('/api', apiKey(), require('./lib/routers/api/recipes'));
app.use('/api', require('./lib/routers/api/recipes'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
