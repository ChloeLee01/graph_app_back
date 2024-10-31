const router = require('express').Router(); 
const topProductsRoute = require('../controllers/topProductsCtrl'); 
router.get('/top_products', topProductsRoute.getTopProducts);

module.exports = router; 