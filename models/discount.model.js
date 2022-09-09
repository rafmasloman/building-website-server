const { database } = require('./dbConnection');

const collection = database().collection('discount');

module.exports = collection;
