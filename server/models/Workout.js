import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    workoutName: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      default: 0, // Default to 0 to make it easier to add
    },
    reps: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    caloriesBurned: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Unique index to prevent duplicate workoutName on the same date for the same user
WorkoutSchema.index({ user: 1, workoutName: 1, date: 1 }, { unique: true });

export default mongoose.model("Workout", WorkoutSchema);
