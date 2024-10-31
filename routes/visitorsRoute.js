const router = require('express').Router(); 
const visitorsRoute = require('../controllers/visitorsCtrl'); 
router.get('/visitors', visitorsRoute.getVistors);

module.exports = router; 