const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const notFoundMiddleware = require("./middlewares/notfound");
const errMiddleware = require("./middlewares/error");

const app = express();

//--- logging http request middleware --->
app.use(morgan("dev"));

//--- enable cors middleware --->
app.use(cors());

//---- parsing request body middleware ------>
app.use(express.json()); // for application content-type: application/json
app.use(express.urlencoded({ extended: false })); // for content-type: application/x-www-form-urlencoded

// app.use = app.all
//----- dispatch to router level middleware ----->
app.use("/users", userRoute);
app.use("/todos", todoRoute);

//----- handle resource not found middleware ----->
app.all("*", notFoundMiddleware);

//----- handle error middleware ------>
app.use(errMiddleware);

const port = 8002;
app.listen(port, () => console.log("server running on port: " + port));
