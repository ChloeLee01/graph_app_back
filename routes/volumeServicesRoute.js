const router = require('express').Router(); 
const volumeServicesRoute = require('../controllers/volumeServicesCtrl'); 
router.get('/volume_services', volumeServicesRoute.getVolumeServices);

module.exports = router; 