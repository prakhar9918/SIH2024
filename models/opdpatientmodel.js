const mongoose = require('mongoose');

const opdpatientSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true
  },
  hospital: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  medicalHistory: {
    type: [String]
  },
  medications: {
    type: [String]
  },
  emergencyContact: {
    name: {
      type: String
    },
    relationship: {
      type: String
    },
    phoneNumber: {
      type: String
    }
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now
  }
});

const opdPatient = mongoose.model('opdPatient', opdpatientSchema);

module.exports = opdPatient;
