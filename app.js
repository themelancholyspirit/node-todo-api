const express = require("express");
const app = express();

require("dotenv").config();

console.log(process.env.PORT);

app.listen(5000, () => console.log("hello"));
