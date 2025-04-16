const mongoose=require("mongoose");

const historySchema=new mongoose.Schema({
    hostid:String,
    user_id:String,
    date:String,
    time:String,
    year:Number,
    score:{ 
        type:Number,
        default:0
    }
});

const History=mongoose.model("History",historySchema);

module.exports=History;