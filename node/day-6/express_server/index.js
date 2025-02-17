const express=require('express');

const app=express();
const port=3000;

app.get('/home',(req,res)=>{
    res.send("hello world ")
});

app.post('/home',(req,res)=>{
    res.send("hello babe")
});
app.patch('/home',(req,res)=>{
    res.send("hello baby ")
});



app.listen(port,function process(){
    console.log('server started at',port)
});