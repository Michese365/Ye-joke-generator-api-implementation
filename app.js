const express = require("express");
const https = require("https");

const app = express();
const url = "https://api.kanye.rest";

app.get("/", function (req, res) {
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      let body = data;
      let newData = JSON.parse(data);
      let quote = newData.quote;

      res.send("Quote: " + quote);
    });

    response.on("end", function () {
      //   console.log(body);
    });
  });
});

app.listen(4000, function (req, res) {
  console.log("Server is running on port 4000");
});
