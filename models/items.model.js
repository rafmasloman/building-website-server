const mongoose = require('mongoose');
const { db } = require('./dbConnection');
const { Schema } = mongoose;

const { imageModel, imageSchema } = require('../models/imageModel');

const productModel = async () => {
  const database = await db();
  const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    location: String,
    city: String,
    imageUrl: imageSchema,
    createdAt: Date,
    updateAt: Date,
  });

  const Product =
    database.models.Product || database.model('Product', productSchema);

  return Product;
};

module.exports = { productModel };
