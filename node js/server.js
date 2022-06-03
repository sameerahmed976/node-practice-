const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const filePath = path.join(__dirname, "bmiCalculator.html");

app.use(bodyparser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About Page</h1>");
// });

app.get("/", (req, res) => {
  res.sendFile(filePath);
});

app.post("/bmicalculator", (req, res) => {
  const bmi = Number(req.body.weight) / Number(req.body.height) ** 2;
  // console.log(req.body);
  res.send(`The BMI is ${bmi.toFixed(2)} <a href="/" >Back to home</a> `);
});

app.get("*", (req, res) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

app.listen(5000, () => {
  console.log("port on 5000");
});
