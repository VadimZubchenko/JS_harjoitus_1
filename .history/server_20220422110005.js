const express = require("express");

const app = express();
// käytetään asenettu porti tai default 3000
let port = process.env.PORT || 3000;

// any request will be sent to public
app.use(express.static("public"));

app.listen(port);

console.log("Server is running in port: " + port);

app.get("/", function (req, res) {});
