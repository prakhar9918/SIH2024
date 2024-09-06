const express =  require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path =  require('path');
const ejsMate = require('ejs-mate');
const connectDb = require('./init/db');


const app = express();

dotenv.config();
connectDb();
app.use(express.json());
app.engine("ejs", ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;

const patientApi = require("./routes/patient_routes");
app.use(patientApi);

app.get('/', (req, res) => {
  // res.send('Welcome to my server!');
  res.render("../views/patient/index.ejs")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});