const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const config = require("./config.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send(
    "Congratulations, your app is running and it'll get request from your TheThingsNetwork account which will be parsed and redirected to IFTTT!"
  );
});

app.post("/test-iftt", function(req, res) {
  const payload = req.body.payload_fields;
  const dorIsOpen = payload[config.doorAttribute];
  const batteryLevel = payload[config.batteryLevelAttribute];

  // Set up the request
  var post_data = {
    value1: dorIsOpen === 0 ? config.closedText : config.openedText,
    value2: batteryLevel
  };

  const clientServerOptions = {
    uri: `https://maker.ifttt.com/trigger/${config.enventName}/with/key/${
      config.iftttKey
    }`,
    body: `${post_data}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  //TODO: manage errors and try to do the request again or send an email.
  request(clientServerOptions, (error, response) =>
    //TODO: should we use a logger?
    console.log(error, response.body)
  );

  res.status(200).send("OK");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
