const mongoose=require("mongoose");

const submissionSchema=new mongoose.Schema({
    hostid:String,
    paper:Number,
    subject:String,
    //new fields
    user_id:String,
    submittedAns: String,
    submittedInput: Number
});

const Submission=mongoose.model("Submission",submissionSchema);

module.exports=Submission;