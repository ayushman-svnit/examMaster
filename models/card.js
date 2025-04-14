const mongoose=require("mongoose");

const cardSchema=new mongoose.Schema({
    year:{
        type: Number,
        required: true
    },
    numOfQues:{
        type: Number,
        required: true
    },
    score:{
        type: Number,
        required: true
    }
});

const Card=mongoose.model("Card",cardSchema);

module.exports=Card;