const express = require('express');
const patient_reg = require('../controllers/patient_controller');
const router = express.Router();

router.post('/register',patient_reg);

router.get('/registerpatient', (req, res) => {
    res.render("../views/patient/signup.ejs");
});

module.exports = router;
