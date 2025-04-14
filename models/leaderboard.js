const mongoose=require("mongoose");

const lbSchema=new mongoose.Schema({
    hostid:String,
    user_id: String,
});

const Leaderboard=mongoose.model("Leaderboard",lbSchema);

module.exports;

