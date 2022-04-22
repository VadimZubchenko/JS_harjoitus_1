const express = require("express");

const app = express();
// käytetään asenettu porti tai default 3000
let port = process.env.PORT || 3000;

app.get("/", function (req, res) {});

app.listen(3000);

console.log("Server is running on port: 3000!!!");
