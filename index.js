const express= require("express")
const mongoose=require("mongoose")

const app= express();
const PORT= 8018;

app.use(express.json());

const usermodel = require("./models/usermodel");

mongoose.connect('mongodb+srv://rajiljain777:Rajil444@cluster0.3y6bfnm.mongodb.net/?retryWrites=true&w=majority')

app.listen( PORT, ()=>console.log(`new with git repo at http://localhost:${PORT}`)
)

app.get("/regions", (req,res)=>{ 
    res.status(200).
    send({'select':'please select preffered zone as your aws region',
    'options':'USA, INDIA, EU, AFRICA, JAPAN,NORWAY' }
    )
})

app.post('/regions/:zone', async (req,res)=>{
    const {zone}=req.params;
    const {server}=req.body;
    const {name}=req.body;
    const id=Math.round(Math.floor(Math.random()*100));
   
   if(!server){
        res.status(418).send('enter the server')
    }
    
    
    await usermodel.create({
                name:`${name}`,
                id:`${id}`,
                server:`${server}`,
                zone:`${zone}`
            
    })

    res.json({
        "result": `${name} your zone is ${zone} with id ${id} and server ${server}`
    })
})

app.get('/regions/server', async (req,res)=> {


     //it will show the param database collections on get method address. 
        usermodel.find({}).then(
            function(param){
            res.json(param)
        }).catch(function(err){
                console.log(err);
            })
            
            
           

        //directly create through function when these get method will be called and wil be seen in  database
        /*async function insert(){
            await param.create({
                id:1,
                server:800,
                zone:'russia'
                name:'rajil'
            })
        }
        insert()*/
        

        //it will show the param database collections in console because we write that. 
        /*usermodel.find({}).then(
            function(param){
            console.log(param)
        }).catch(function(err){
                console.log(err);
            })*/
   
     });

app.post('/regions/zone/servch',async (req,res)=>{
    const {name}=req.body;
    const server= Math.round(Math.floor(Math.random()*10));
 
    if(!name){
        res.json("please enter the name")
    }

    await usermodel.findOneAndUpdate({name:`${name}`},{server:`${server}`}).then(
        function(param){
        res.json(param)
    }).catch(function(err){
            console.log(err);
        })

    })

    