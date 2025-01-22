import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    totalScore: {
        type: Number,
        default: 0,
    },
    prizesWon: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
