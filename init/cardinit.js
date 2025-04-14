const mongoose=require("mongoose");
const Card=require("../models/card.js");

main()
.then(()=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ExamMaster');
}

Card.deleteMany({});

let cards=[
    {
        year:2024,
        numOfQues:102,
        score:360
    },
    {
        year:2023,
        numOfQues:102,
        score:360
    },
    {
        year:2022,
        numOfQues:108,
        score:360
    },
    {
        year:2021,
        numOfQues:114,
        score:360
    },
    {
        year:2020,
        numOfQues:108,
        score:396
    }
];

Card.insertMany(cards);
