var db = require("../models/db");

module.exports = function(app) {

        // Workout GET route 
        app.get("/api/workouts/", function(req, res){
            console.log("THIS IS THE WORKOUT GET ROUTE", req.params)
            db.Workout.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
        });

        // Stats GET route
        app.get("/api/workouts/range", function(req, res){
            ("THIS IS THE STATS GET ROUTE", req.body)
            db.Workout.find({}).limit(8)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err)
                res.json(err);
            });
        });

    // Workout by ID PUT route 
    app.put("/api/workouts/:id", function (req, res){
        console.log("WORKOUT BY ID PUT ROUTE")
        var workoutId = req.params.id;
        console.log("req setup", req.params.id);
        var workoutData = req.body;
        db.Workout.findByIdAndUpdate(
            {_id: workoutId},
            {$push: {workouts: workoutData}},
            {new:true, runValidators: true}
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });

    // Workout POST route
    app.post("/api/workouts", function(req, res){
        console.log("WORKOUT POST ROUTE", req.body)
        db.Workout.create({})
            .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

};