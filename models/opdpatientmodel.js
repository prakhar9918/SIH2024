const mongoose = require('mongoose');


const opdpatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password:{
    type : String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  address: {
   type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  medicalHistory: {
    type: [String], 
  },
  medications: {
    type: [String], 
  },
  subject : {
    type: String
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phoneNumber: String,
  },
  dateOfRegistration:{
    type: Date,
    default: Date.now,
  },
});

const opdPatient = mongoose.model('opdPatient', opdpatientSchema);

module.exports = opdPatient;
