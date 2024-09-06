const opdPatient = require('../models/opdpatientmodel');

// Controller to handle OPD Patient Registration
const opd_register = async (req, res) => {
    try {
        // Extracting data from the request body
        const {
            department,
            hospital,
            doctor,
            name,
            age,
            password,
            gender,
            address,
            phoneNumber,
            email,
            medicalHistory,
            medications,
            emergencyName,
            relationship,
            emergencyPhoneNumber,
            appointmentDate
        } = req.body;

        // Create a new OPD patient record
        const newPatient = new opdPatient({
            department,
            hospital,
            doctor,
            name,
            age,
            password,
            gender,
            address,
            phoneNumber,
            email,
            medicalHistory: medicalHistory ? medicalHistory.split(',') : [],
            medications: medications ? medications.split(',') : [],
            emergencyContact: {
                name: emergencyName,
                relationship,
                phoneNumber: emergencyPhoneNumber
            },
            appointmentDate
        });

        // Save the patient to the database
        await newPatient.save();

        // Respond with success message
        res.status(201).json({
            message: 'Patient registered successfully',
            patient: newPatient
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while registering the patient', error: error.message });
    }
};

module.exports = opd_register;
