require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const connnectDatabase = require("./src/db/databaseConnection");
const errorCatcherMiddleware = require("./src/middleware/errorCatcher");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./src/routes/userRoutes");
const areas = require("./src/routes/areaRoutes");

connnectDatabase();

app.use("/users", users);
app.use("/areas", areas);

app.listen(4000, () => {
  console.log("running in port 4000");
});

app.use(errorCatcherMiddleware);
