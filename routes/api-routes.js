var db = require("../models");

module.exports = function(app) {

    // workout data get route
    app.get("/api/workouts/", function(req, res){
        console.log("Exercise data route", req.params)
        db.Workout.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    
    // stats data get route
    app.get("/api/workouts/range", function(req, res){
        ("stats route", req.body)
        db.Workout.find({}).limit(8)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        });
    });
    
    // exercise data by id put route
    app.put("/api/workouts/:id", function (req, res){
        console.log("exercise by id PUT route")
        var exerciseId = req.params.id;
        console.log("req setup", req.params.id);
        var exerciseData = req.body;
        db.Workout.findByIdAndUpdate(
            {_id: exerciseId},
            {$push: {exercises: exerciseData}},
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
    
    // workout data post route
    app.post("/api/workouts", function(req, res){
        console.log("workout post route", req.body)
        db.Workout.create({})
            .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

};