const mongoose = require('mongoose');
const { db } = require('./dbConnection');
const { Schema } = mongoose;

const productModel = async () => {
  const database = await db();
  const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    location: String,
    city: String,
    createdAt: Date,
    updateAt: Date,
  });

  const Product =
    database.models.Product || database.model('Product', productSchema);

  return Product;
};

module.exports = { productModel };
