const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
const https = require("https");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.send("Hello");
});

app.post("/", (req, res) => {
  // console.log(req.body.joke);
  // res.send();
  // console.log("post recieved");
  const query = req.body.joke;
  // const url = `https://v2.jokeapi.dev/joke/Programming?type=single`;
  const url = `https://v2.jokeapi.dev/joke/Any?type=single&contains=${query}`;
  https.get(url, (response) => {
    // console.log(response.statusCode);

    response.on("data", (data) => {
      // console.log(data);
      const jokeData = JSON.parse(data);
      // console.log(jokeData);

      const joke = jokeData.joke;
      // console.log(joke);

      // res.write()
      res.send(`<h1>${joke}</h1>`);

      // const object = {
      //   name: "sam",
      //   email: "sam@gmail.com",
      // };
      // console.log(JSON.stringify(object));
    });
  });
});

app.listen(5000, () => {
  console.log("Port on 5000");
});

// const query = code;
// // const url = `https://v2.jokeapi.dev/joke/Programming?type=single`;
// const url = `https://v2.jokeapi.dev/joke/Any?type=single&contains=${query}`;
// https.get(url, (response) => {
//   // console.log(response.statusCode);

//   response.on("data", (data) => {
//     // console.log(data);
//     const jokeData = JSON.parse(data);
//     // console.log(jokeData);

//     const joke = jokeData.joke;
//     // console.log(joke);

//     // res.write()
//     res.send(`<h1>${joke}</h1>`);

//     // const object = {
//     //   name: "sam",
//     //   email: "sam@gmail.com",
//     // };
//     // console.log(JSON.stringify(object));
//   });
// });
