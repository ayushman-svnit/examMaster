const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    profile:{
        type:String,
        default:"http://localhost:8000/pfp.png"
    },
    username:{
        type:String,
        required:true
    },
    name:{
        default: this.username,
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    instituteId:{
        type: String
    }
});

const User=mongoose.model("User",userSchema);

module.exports=User;