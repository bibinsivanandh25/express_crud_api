const express = require('express');
const { PORT, NODE_ENV } = require('./config');
const cors = require('cors');
const { DBConnection } = require('./config/db');
const StudentRoute = require('./routes/students');
const morgan = require('morgan');
const app = express();

let StartServer = () => {
  // ==========database connection starts==========
  DBConnection();
  // ==========database connection ends============

  // ---------MIDDLEWARE SECTION STARTS HERE--------
  if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(express.json());
  app.use(cors());
  // ---------MIDDLEWARE SECTION ENDS HERE----------

  /*------------LOAD ROUTES START HERE-------------*/
  app.use('/api/students/', StudentRoute);
  /*------------LOAD ROUTES START HERE-------------*/

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`server is running on port number  ${PORT}`);
  });
};
StartServer();
