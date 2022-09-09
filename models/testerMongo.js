const mongoose = require('mongoose');
const { Schema } = mongoose;

const connect = () => {
  const db = mongoose.connect('mongodb://localhost:27017/rfshop');
  return db;
};

const productModel = async () => {
  const db = await connect();

  const productSchema = new Schema({
    name: String,
    price: Number,
  });

  const Product = db.model('Product', productSchema);

  return Product;
};

const addItems = async () => {
  const Product = await productModel();

  const mobile01 = new Product({
    name: 'IPhone 12 Pro',
    price: 14000000,
  });

  const mobile02 = new Product({
    name: 'Samsung a73',
    price: 7000000,
  });

  Product.insertMany([mobile01, mobile02], function (err, success) {
    if (err) {
      console.log('Gagal menambah data');
    } else {
      mongoose.connection.close();
      console.log('Berhasil menambah data');
    }
  });

  return Product;
};

const deleteItems = async (name) => {
  const Product = await productModel();

  Product.deleteOne({ name }, function (err, success) {
    if (err) {
      console.log('Gagal menghapus data');
    } else {
      mongoose.connection.close();
      console.log('Berhasil menghapus data');
    }
  });
};

deleteItems('asdasf');
