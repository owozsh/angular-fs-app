const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post Added Successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: 1,
      title: "first",
      content: "test from the server",
    },
  ];

  res.status(200).json({
    message: "posts fetched succesfully!",
    posts: posts,
  });

  next();
});

module.exports = app;
