const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodOverride=require("method-override");
const path=require("path");
const User=require("./models/user.js");
const Card=require("./models/card.js");
const Question=require("./models/ques.js");
const Submission=require("./models/submission.js");
const History=require("./models/history.js");
const Leaderboard=require("./models/leaderboard.js");
const port=3000;

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");
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

app.patch("/users/:id",async (req,res)=>{
    let img=req.body.img;
    let name=req.body.name;
    let {id}=req.params;
    await User.updateOne(
        {_id:id},
        {profile: img, name:name}
    );
    res.redirect(`/users/${id}`);
});


//to display question page
app.get("/ques/:card_id/:id",(req,res)=>{
    let {card_id,id}=req.params;
    res.render("question.ejs",{card_id,id});
});

app.get("/instruction/:card_id/:id",(req,res)=>{
    let {card_id,id}=req.params;
    res.render("instruction.ejs",{card_id,id});
});

//to store the submissions after submit
app.post("/submission/:card_id/:id",async (req,res)=>{
    await Submission.insertMany(req.body.response);
});

//to display submission page
app.get("/submission/:card_id/:id",async (req,res)=>{
    let { card_id, id } = req.params;
    res.render("submission.ejs", { hostid: card_id, user_id: id });
});

//to delete the submissions if the test is exited in between
app.delete("/ques/:card_id/:id",(req,res)=>{
    let {card_id,id}=req.params;
    res.redirect(`/users/${id}`);
});


//for history page
app.get("/:id/history",async (req,res)=>{
    let {id}=req.params;
    let his=await History.find({user_id: id});
    let user=await User.findOne({_id: id});
    res.render("history.ejs",{user,his});
});

app.post("/:id/history",async (req,res)=>{
    let {id}=req.params;
    let hostid=req.body.response;
    let date=req.body.date;
    let time=req.body.time;
    let year=(await Card.findOne({_id: hostid})).year;
    //time dalna bahi hai, because net khatam ho gaya tha
    const his=new History({
        hostid: hostid,
        user_id: id,
        date: date,
        time: time,
        year: year
    });
    his.save()
    .then(()=>{
        console.log("History saved");
    })
    .catch(()=>{
        console.log("History not saved.");
    });
});

app.patch("/:id/history",async (req,res)=>{
    let {id}=req.params;
    let score=req.body.Score;
    let hostid=req.body.card_id;
    await History.updateOne(
        {
            hostid:hostid,
            user_id:id
        },
        {
            score:score
        }
    )
});

app.get("/:id/leaderboard",async (req,res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id});
    let users=await User.find({});
    let arr=[];
    for(let i=0;i<users.length;i++){
        let uid=users[i]._id;
        let username=(await User.findOne({_id:uid})).username;
        let his=await History.find({user_id:uid});
        let points=0;
        for(let i=0;i<his.length;i++){
            points+=his[i].score;
        }
        let obj={
            un:username,
            scr: points
        }
        arr.push(obj);
    }
    arr.sort((a, b) => b.scr - a.scr);
    res.render("lb.ejs",{user,arr});
});

app.get("/:id/resources",async (req,res)=>{
    let {id}=req.params;
    let user=await User.findOne({_id:id});
    res.render("resource.ejs",{user});
});

app.get("/:id/premium",(req,res)=>{
    res.send("This is Premium page");
});

//temporary path for CRUD operations during question solving
app.post("/crud/ques/:card_id/:id",async (req,res)=>{
    let {card_id,id}=req.params;
    let ques=await Question.find({hostid:card_id});
    return res.json({Ques : ques});
});

//temporary path for CRUD operations during ssubmission analysis
app.post("/crud/submission/:card_id/:id",async (req,res)=>{
    let {card_id,id}=req.params;
    let sub=await Submission.find({hostid:card_id , user_id:id});
    return res.json({Sub : sub});
});



