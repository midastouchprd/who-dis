/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

/* ====  Middleware  ==== */
//Cors
app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/helloworld", (req, res) => {
  res.send("Hello World!");
});

//IS THE REACT FULL STACK MAGIC MIDDLEWARE
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/
app.use((req, res, next) => {
  console.log(req.headers);
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("Successfully Connected to Who Dis Api");
});
