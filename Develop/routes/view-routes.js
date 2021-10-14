const path = require("path");

module.exports = function(app) {
    //landing api route
    app.get("/", function(req, res){
        console.log("LANDING PAGE '/' route")
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Stats GET route
    app.get("/stats", function(req, res) {
        console.log("STATS '/stats' GET ROUTE")
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
    

    // Workout GET route 
    app.get("/workout", function(req, res){
        console.log("Workout '/workout' GET ROUTE")
        res.sendFile(path.join(__dirname, "../public/workout.html"));
    });


}