const mongoose  = require('mongoose');
const Patient = require('../models/patientmodel');

const patient_reg = async(req,res) =>{
try{
   const {
        name,
        age,
        password,
        gender,
        address,
        phoneNumber,
        email,
        medicalHistory,
        medications,
        emergencyContact
      } = req.body;
    
      const newPatient = new Patient({
        name,
        age,
        password,
        gender,
        address,
        phoneNumber,
        email,
        medicalHistory,
        medications,
        emergencyContact,
      });

      await newPatient.save();
      res.status(200).send({
        success: true,
        message: "Registered successfully",
      });
      console.log(newUser);
}catch(err){
    res.status(500).send({
        success: false,
        message: "Patient didn't register",
      });
}
};
module.exports = patient_reg;