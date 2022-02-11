const { connect } = require('mongoose');
const { MONGODB_URL } = require('./index');

exports.DBConnection = async () => {
  await connect(MONGODB_URL, err => {
    console.log('mongodb connected');
  });
};
