const router = require('express').Router(); 
const targetRealityRoute = require('../controllers/targetRealityCtrl'); 
router.get('/target_reality', targetRealityRoute.getTargetReality);

module.exports = router; 