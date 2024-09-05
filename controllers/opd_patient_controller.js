const opdPatient = require('../models/opdpatientmodel');

const opdpatient_reg = async(req,res) =>{
    try{
       const {
            name,
            age,
            password,
            gender,
            address,
            phoneNumber,
            email,
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
    module.exports = opdpatient_reg;