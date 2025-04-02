const mongoose=require("mongoose");

const submissionSchema=new mongoose.Schema({
    hostid:String,
    paper:Number,
    subject:String,
    quesType: String,
    ques: String,
    isImg: Boolean,
    quesImg: String,
    isOptImg: Boolean,
    opt1: String,
    opt1Img: String,
    opt2: String,
    opt2Img: String,
    opt3: String,
    opt3Img: String,
    opt4: String,
    opt4Img: String,
    ans: String,
    input: String,
    //new fields
    user_id:String,
    submittedAns: String,
    submittedInput: Number
});

const Submission=mongoose.model("Submission",submissionSchema);

module.exports=Submission;