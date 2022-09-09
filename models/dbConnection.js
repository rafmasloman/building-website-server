const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/rfshop';

const db = () => {
  const database = mongoose.connect(url);

  return database;
};

// const uri =
//   'mongodb+srv://rafmasloman:rafmasloman01@cluster0.7qduorv.mongodb.net?retryWrites=true&w=majority';
// const client = new MongoClient(uri);

// const database = () => {
//   const db = client.db('shop');
//   // const products = db.collection('product');

//   return db;
// };

module.exports = { db };
