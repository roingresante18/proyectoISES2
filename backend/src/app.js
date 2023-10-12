const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes/index');

app.use(cors());
app.use(express.json());

var whitelist = ['http://localhost:5173']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.get('/', (req,res) => {
    res.send('Backend con nodejs ');
});

routerApi(app);

module.exports = app;