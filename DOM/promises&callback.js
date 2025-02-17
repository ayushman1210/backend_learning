// closure 
// when a function remembers its lexical scope even when function is executed outside the lexical s  cope
// function todo(task){
//     console.log("start")
//     setTimeout(function fun()  {
//         console.log("completed",task) // this happens due to closure
//     }, 1000);
//     console.log("end")
//     // task="hello";   its just not copy pasting the value it always remmber the variable 
// }

// console.log("starting")
// todo("assignments")
// console.log("ends")

// function a(name){
//     return function b(){
//         console.log(name);
//     }
// }
// let x=a("ayushman");
// for(let i=0; i<1000;i++){
//     // console.log("hello")
// }
// console.log(x);
// x();
 

// let is a block scope 
function test(){
    for(let i=0; i<3; i++){
        setTimeout( function execute(){
            console.log(`i:${i}`);
        }, i*1000);
        
    }
}
test();


// var is a functional scope  
function test(){
    for(var i=0; i<3; i++){
        setTimeout( function execute(){
            console.log(`i:${i}`);
        }, i*1000);
        
    }
}
test();
 