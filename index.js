const express = require("express");
const app = express();

app.get("/kevin", function (req, res) {
  res.send("Hola mi nombre es Kevin 😎");
});

app.listen(3000);
