// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
// Start up an instance of app

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 7000;
const server =  app.listen(port,listening);
function listening(){
    console.log("server is running");
    console.log(`running port ${port}`)
}
// get method
app.get('/all', getdata);
function getdata(req,res){
  res.send(projectData);
  console.log(`project data ${projectData}`);
}
// post method
app.post('/', addTemp);
function addTemp(req,res){
    projectData.Temprature = req.body.Temprature;
    projectData.feeling = req.body.feeling;
    projectData.newDate = req.body.newDate;
    res.send(projectData) ;
    console.log(projectData);
};
