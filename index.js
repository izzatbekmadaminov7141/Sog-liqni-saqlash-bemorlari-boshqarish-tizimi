const express = require("express");
const app = express();
const routerMain = require("./routers/main"); // nomini to'g'rilash
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Template engines
app.set("view engine", "ejs");
app.set("views", "views");
// Routes
app.use("/", routerMain); // nomini to'g'rilash
app.use("/users", require("./routers/users"));
// 404

// PORT listen for requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
