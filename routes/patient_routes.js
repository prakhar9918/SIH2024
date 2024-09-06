const express = require('express');
const patient_reg = require('../controllers/patient_controller');
const opd_register = require('../controllers/opd_patient_controller')
const router = express.Router();

router.post('/register',patient_reg);

router.post('/opdregister', opd_register);

router.get('/registerpatient', (req, res) => {
    res.render("../views/patient/signup.ejs");
});

router.get('/opdreg', (req,res)=>{
    res.render("../views/patient/opdSignUp.ejs")
})

module.exports = router;
