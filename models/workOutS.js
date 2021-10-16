const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workOutSchema = new Schema(
    // https://mongoosejs.com/docs/validation.html 
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please select an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter a unique exercise name",
                    // unique: true
                },
                duration: {
                    type: Number,
                    required: "Please enter your exercise duration in minutes (0-60)",
                    // maximum: [60, "Please enter a number between 0 and 60 for your exercise duration in minutes"]
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                }
                
            }
        ]
    },
    {
        toJSON: {
            // allowing virtual properties when data is requested
            virtuals: true
        }
    }
);
// dynamically created property 
workOutS.virtual("totalDuration").get(function () {
    // "reduce" exercises array to a sum of exercise durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workOutS);
module.exports = Workout;