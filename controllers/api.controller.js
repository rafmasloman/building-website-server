const { productModel } = require('../models/items.model');

const addItems = async (req, res) => {
  const { name, price, description } = req.body;
  const Product = await productModel();
  const mobile = new Product({
    name,
    price,
    description,
  });

  Product.create(mobile, function (err, success) {
    if (err) {
      return res.json({
        status: false,
        message: 'Gagal menambah data',
      });
    }

    res.json({
      status: true,
      message: 'berhasil menambah data',
    });
  });
};

const getAllProducts = async (req, res) => {
  const Product = await productModel();
  Product.find({}, function (err, data) {
    if (err) {
      return res.json({
        status: false,
      });
    }
    res.json({
      status: true,
      data,
    });
  });
};

module.exports = { addItems, getAllProducts };
