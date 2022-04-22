const express = require("express");

const app = express();
// käytetään asenettu porti tai default 3000
let port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", function (req, res) {});

app.listen(port);

console.log("Server is running on port: " + port);
