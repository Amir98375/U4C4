const express = require("require")
const app = express()
const mongoose= require("mongoose")
const connect = ()=>mongoose.connect(
    "mongodb+srv://web15:web15@cluster0.zieim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )

    userSchema = new mongoose.Schema({
        First_name:{type:String,required:true},
        last_name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }

    )
    User= new mongoose.model("user",userSchema)

    todoSchema = new mongoose.Schema({
        title:{type:String,required:true}
        
        
    },
    {
        timestamps:true,
        versionKey:false
    }

    )
    Todo= new mongoose.model("todo",todoSchema)



    app.listen(5000,()=>{
        connect()
        console.log("port is listening on 5000")
    })