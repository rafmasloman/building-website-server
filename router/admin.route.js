const router = require('express').Router();

// const { addItems, deleteItems } = require('../controllers/controller');
const {
  viewDashboard,
  productController,
} = require('../controllers/admin.controller');

router.get('/dashboard', viewDashboard.adminDashboard);
router.get('/items', viewDashboard.itemsDashboard);
router.get('/items/input', viewDashboard.formInputView);
router.get('/login', viewDashboard.logout);
router.post('/items/input/item', productController.addProduct);
router.get('/items/delete/:id', productController.deleteProduct);

module.exports = router;
