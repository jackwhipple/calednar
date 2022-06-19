var express = require("express");
var app = express();
var path = require("path");
var PORT = 3000;
var fs = require("fs");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var test = fs.readFileSync("text.json", "utf8");
var testUnpacked = JSON.parse(test);


app.get("/writings", function (request, response) {
  test = fs.readFileSync("text.json", "utf8");
  testUnpacked = JSON.parse(test);
  response.send(testUnpacked);
});

app.post("/writings", function (request, response) {
  test = JSON.stringify(request.body);
  fs.writeFileSync("text.json", test);
  response.send();
});

app.listen(PORT);

// https://replit.com/@hubol/super-graffiti-world
// express
// https://docs.google.com/document/d/1WhU9TKwLUAQyMjSeNHMHAHolUk6vXivUPD-YE8uVEv4/edit?usp=sharing
// fetch
// https://docs.google.com/document/d/1ZeyQquW_fpX88Og456yW3VGsfKv_RVhJzP7zXchlufU/edit?usp=sharing
