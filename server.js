// Required packages and modueles
const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require("node-fetch");
const InitiateMongoServer = require("./config/db");
const baseRouter = require('./routes')

// Initiate Mongo Server
InitiateMongoServer();

// Initiate Express App
const app = express();
app.use(cors())
app.use(bodyParser.json())

// Define PORT
const PORT = parseInt(process.env.PORT, 10) || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Router Middleware
 * Router - /api/*
 * Method - *
 */
app.use("/api", baseRouter);

// Boot express server

app.get('/home', (req, res) =>{
  fetch(`https://novablog.webdevdemo.com/wp-json/wp/v2/posts?per_page=3&_embed`)
  .then(res => res.json())
  .then(data => {
    res.send(data)
  })
})


app.get('/', (req, res) => {
  res.send('Hello')
})
app.listen(PORT, () => {
  console.log(`Server Booted at PORT ${PORT}`);
  
});