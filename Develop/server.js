// checked package.json and notice the server.js could was required.
//updated the package.json to include nodemon and path.js
//now building server.js as seen in week 18 class activities - mongoose connection, public serving, routes definition
// creating a route folder and routing files


const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
// PORT Definition
const PORT = process.env.PORT || 3000;

// Public Serving Pages
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Mongoose DB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// ROUTES
(require("./routes/view-routes.js"))(app);
(require("./routes/api-routes"))(app);

// APP Link
app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});