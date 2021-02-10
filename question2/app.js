const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "index1.html"));
});

app.listen(8080, () => {
  console.log("server is running!");
});
