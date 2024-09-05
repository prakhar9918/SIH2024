const express = require('express');
const patient_reg = require('../controllers/patient_controller');
const router = express.Router();

router.post('/register',patient_reg);

module.exports = router;
