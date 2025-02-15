const express=require('express');
// const bodyParser = require('body-parser');
const app=express();
const port=3000;

// app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



let list=[];

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:list,
        success:true,
        id:Math.floor(Math.random()*1000)
    })
})

app.post('/blogs',(req,res)=>{
// list.push({title:req.body.title,description:req.body.description})
console.log(req.body);
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