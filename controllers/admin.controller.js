const { productModel } = require('../models/items.model');
const { imageModel } = require('../models/imageModel');

const viewDashboard = {
  adminDashboard: (req, res) => {
    res.render('admin/dashboard/dashboard.view.ejs');
  },
  itemsDashboard: async (req, res) => {
    const product = await productController.getAllProduct();
    res.render('admin/items/items.view.ejs', { product });
  },
  formInputView: (req, res) => {
    res.render('admin/items/inputData.view.ejs');
  },
  logout: (req, res) => {
    res.render('admin/auth/login.view.ejs');
  },
};

const productController = {
  addProduct: async (req, res) => {
    const { name, price, location, city } = req.body;
    const Product = await productModel();
    const Image = await imageModel();

    const imageUrl = new Image({
      url: 'imageTest',
    });

    imageUrl.save();
    const date = new Date();
    const query = new Product({
      name,
      price,
      location,
      city,
      imageUrl: imageUrl,
      createdAt: date,
    });

    Product.create(query, function (err, result) {
      if (err) {
        console.log('gagal menambah data');
      }
      res.redirect('/admin/items/');
    });
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const Product = await productModel();
    const query = {
      _id: id,
    };
    Product.deleteOne(query, function (err, result) {
      if (err) {
        console.log('gagal menghapus data');
      }
      res.redirect('/admin/items/');
    });
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const Product = await productModel();

    const query = new Product({
      _id: id,
    });

    const result = (err, result) => {
      if (err) {
        console.log('gagal mengupdate data');
      }
      return res.redirect('/admin/items/');
    };

    Product.updateOne(query, {
      $set: {
        name,
        price,
        location,
        city,
      },
      result,
    });
  },

  getAllProduct: async () => {
    const Products = await productModel();
    const product = await Products.find({});
    return product;
  },
};

module.exports = { viewDashboard, productController };
