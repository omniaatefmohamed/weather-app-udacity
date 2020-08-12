// Setup empty JS object to act as endpoint for all routes
var projectData = [];

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
app.get('/all', getdata);
function getdata(req,res){
  res.send(projectData);
  console.log(`project data ${projectData}`);
}
app.post('/', addTemp);
function addTemp(req,res){
    newEntry = {
      Temprature: req.body.Temprature,
      feeling:req.body.feeling
    } 
    projectData.push(newEntry);
    res.send(projectData) ;
    console.log(projectData);
};
