const express = require("express");
const mongoose = require("mongoose");
const db = require("./src/config/database");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4500;

app.listen(port, () => console.log("app running on port 4500"));
