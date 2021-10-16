// dependencies import
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// https://expressjs.com/en/resources/middleware/morgan.html 
const morgan = require("morgan");

// port definition
const PORT = process.env.PORT || 3000;

// mongoose DB connection 
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/exerciseDB',
    {
        useNewUrlParser: true
    }
)

//  middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(morgan("dev"));

// custom routes import
(require("./routes/fitness-routes.js"))(app);
(require("./routes/api-routes"))(app);

// app is listening on port #
app.listen(PORT, function () {
    console.log(`App running on port ${PORT}!`)
});
