const express =  require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path =  require('path');

const app = express();

dotenv.config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;

const patientApi = require("./routes/patient_routes");
app.use(patientApi);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});