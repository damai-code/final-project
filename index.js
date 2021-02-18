//Import Dependencies
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

//Express
const app = express();

//Import Data
const router = require("./src/routes/index");
const port = process.env.PORT || 4500;
const database = require("./src/config/database");
const contentRoutes = require('./src/routes/content');

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
app.use(router.registerRoutes);
app.use(router.loginRoutes);
app.use(router.trackingRoutes);
app.use('/content', contentRoutes);

app.listen(port, () => console.log("app running on port 4500"));
