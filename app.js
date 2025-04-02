const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const path=require("path");
const User=require("./models/user.js");
const Card=require("./models/card.js");
const Question=require("./models/ques.js");
const Submission=require("./models/submission.js");
const port=3000;

app.set("views",path.join(__dirname,"/views"));
app.set("view egine","ejs");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

main()
.then(()=>{
    console.log("connected to database");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ExamMaster');
}

//________________________________________________________________________________________
app.get("/",(req,res)=>{
    res.render("new.ejs");
});
app.post("/",(req,res)=>{
    let ques=new Question(req.body);
    ques.save()
    .then(()=>{
        res.send("Saved successfully");
    })
    .catch(()=>{
        res.send("Error saving files");
    });
});
//________________________________________________________________________________________

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}/register`);
})  

app.get("/register",(req,res)=>{
    res.render("register.ejs");
});

app.post("/register",async (req,res)=>{
    let {username,password,name,email,instituteid}=req.body;
    let isUsernamePresent=await User.find({username: username});
    let isEmailPresent=await User.find({email: email});
    if(isUsernamePresent.length){
        console.log(isUsernamePresent);
        res.send("Username is already present");
    }
    else if(isEmailPresent.length){
        console.log(isEmailPresent);
        res.send("E-mail is already present");
    }
    else{
        const user1=new User(req.body);
        user1.save()
        .then(async ()=>{
            const obj=await User.findOne({username:username});
            console.log(obj);
            res.redirect(`/users/${obj._id}`);
        })
        .catch(()=>{
            res.send("Data not saved");
        });
    }
});

app.get("/login",(req,res)=>{
    res.render("login.ejs");
});

app.post("/users",async (req,res)=>{
    let {username,email,password}=req.body;
    let obj={};
    if(username===""){
        obj=await User.findOne({email: email});
        if(obj.password!==password){
            return res.send("E-mail or password is incorrect.");
        }
    }
    else if(email===""){
        obj=await User.findOne({username: username});
        if(obj.password!==password){
            return res.send("Username or password is incorrect.");
        }
    }
    res.redirect(`/users/${obj._id}`);
});


app.get("/users/:id",async (req,res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id: id});
    let cards=await Card.find({});
    res.render("home.ejs",{user,cards});
});

//to display question page
app.get("/users/:card_id/:id",async (req,res)=>{
    let {card_id,id}=req.params;
    let ques=await Question.find({hostid: card_id});

    let submissions = ques.map(q => ({ //somewhat iterate over the entire array
        hostid: card_id,
        paper: q.paper,
        subject: q.subject,
        quesType: q.quesType,
        ques: q.ques,
        isImg: q.isImg,
        quesImg: q.quesImg,
        isOptImg: q.isOptImg,
        opt1: q.opt1,
        opt1Img: q.opt1Img,
        opt2: q.opt2,
        opt2Img: q.opt2Img,
        opt3: q.opt3,
        opt3Img: q.opt3Img,
        opt4: q.opt4,
        opt4Img: q.opt4Img,
        ans: q.ans,
        input: q.input,
        user_id: id  // New field
    }));

    // Using insertMany for better performance
    await Submission.insertMany(submissions);

    res.render("question.ejs",{ques});
});

app.get("/:id/history",(req,res)=>{
    res.send("This is history page");
});

app.get("/:id/leaderboard",(req,res)=>{
    res.send("This is Leaderboard page");
});

app.get("/:id/premium",(req,res)=>{
    res.send("This is Premium page");
});