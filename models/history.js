const mongoose=require("mongoose");

const historySchema=new mongoose.Schema({
    hostid:String,
    user_id:String,
    date:String,
    time:String,
    year:Number,
    score: Number
});

const History=mongoose.model("History",historySchema);

module.exports=History;