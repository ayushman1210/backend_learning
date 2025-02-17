const express=require('express');
// const bodyParser = require('body-parser');
const app=express();
const port=3000;

// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger);



let list=[];

function logger(req,res,next){
    console.log(req.url);
    console.log(req.body);
    next();
}

    function authentication(req,res,next){
        console.log("yes authenticated ");
        next();
    }

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:list,
        success:true,
    })
})

app.post('/blogs',(req,res)=>{
list.push({
    title:req.body.title,
    description:req.body.description,
    id:Math.floor(Math.random()*1000)
})

return res.status(201).json({
    success:true,
});
})

app.get('/blogs/:id',(req,res)=>{
    const result=list.filter((blog)=>{blog.id=req.params.id});
    return res.status(200).json({
    data:result,
    success:true,
    })
})

app.listen(port,()=>{
    console.log("start listening",port)
})