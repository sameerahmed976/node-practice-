const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const today = new Date().getDay();

  //   if (today.getDate() === 6 || today.getDate() === 0) {
  // res.send("<h1>It is a weekends</h1>");
  // res.sendFile("index.html");
  let day = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  res.render("list", { today: day[today] });
  //   } else {
  // res.send("I have to work");
  // res.sendFile(__dirname + "/index.html");
  //   }
});

app.listen(5000, () => {
  console.log("Port 5000");
});
