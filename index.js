const express = require("express");
const mongoose = require("mongoose");
const db = require("./src/config/database");
const router = require("./src/routes");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());

const port = process.env.PORT || 4500;

app.use(router.trackingRouter);

app.listen(port, () => console.log("app running on port 4500"));
