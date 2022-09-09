const mongoose = require('mongoose');
const { db } = require('./dbConnection');
const { Schema } = mongoose;

const imageSchema = new Schema({
  url: String,
});

const imageModel = async () => {
  const database = await db();
  const Image = database.models.Image || database.model('Image', imageSchema);

  return Image;
};

module.exports = { imageSchema, imageModel };
