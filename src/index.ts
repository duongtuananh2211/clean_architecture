import express from "express";
import bodyParser from "body-parser";

import CalculatorController from "./controllers/CalculatorController";
import UserController from "./controllers/UserController";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

new CalculatorController(app);
new UserController(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
