const router = require('express').Router();
const { route } = require('express/lib/application');
const { getAllProducts, addItems } = require('../controllers/api.controller');

router.get('/', getAllProducts);
router.post('/add', addItems);

module.exports = router;
