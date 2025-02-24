let obj={
name:"ayushman",
course:"btech",
display:()=>{
console.log(this.name,this.course);
}
}
obj.display();

let obj2={
    name:"samriddh",
    course:"btech",
    display:function process(){
        console.log(this.name,this.course);
    }
}

obj2.display();

let obj1={
name:"kal",
course:"btech",
display:()=>{
    setTimeout(()=>{
console.log(this.name,this.course)
},3000)
    
}
}
obj1.display();