const express=require("express");
const app=express();
const router=express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const Cat = mongoose.model('Cat', { name: String });

async function run(){
    await mongoose.connect('mongodb://mongodb:27017/test');
    console.log("mongo connected")
    app.listen(3000,()=>{
        console.log("server listening on port 3000");
    });
}


app.get("/",async (req,res)=>{
    try{
        const allCats=await Cat.find();
        console.log("i have been called");
        res.status(200).json(allCats);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
});

app.post("/",async (req,res)=>{
    try{
        const kitty = new Cat({ name: req?.body?.name || "rawi" });
        await kitty.save();
        res.status(200).json("mewo");
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
});

app.use('/router',require("./router"));

run()