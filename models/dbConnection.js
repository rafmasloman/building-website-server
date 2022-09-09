const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/rfshop';

const db = () => {
  const database = mongoose.connect(url);

  return database;
};

module.exports = { db };
