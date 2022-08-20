const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const dotenv = require('dotenv');
const path = require('path');


var cors = require('cors');
app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/employees', (req, res) => {
//     res.send('Employees');
// }
// );

const connectDB = require('./config/db');

//load config
dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
app.use("/static", express.static(path.join(__dirname, "static")))
app.use('/uploads', express.static('uploads'))
app.use('/', require('./routes/index'));
app.listen(3000);


