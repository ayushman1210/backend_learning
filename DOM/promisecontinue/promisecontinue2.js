// console.log("start");

// setTimeout(function timer(){
//  console.log("timer1")
// },0)
// for(let i=0; i<100000000; i++){

// }
 
// let x=Promise.resolve(123); 
// x.then(function promisecall(value){
//     console.log("which promise",value)
// });

// setTimeout(function timer1(){
//     console.log("timer is completed ")
// },0)

// console.log("end");

// second code 

// console.log("start");

// setTimeout(function timer(){
//  console.log("timer1")
//  let y=Promise.resolve(456);
//  y.then(function promise(value){
//     console.log(value);
//  })
// },0)
// for(let i=0; i<100000000; i++){

// }
 
// let x=Promise.resolve(123); 
// x.then(function promisecall(value){
//     console.log("which promise",value)
// });

// setTimeout(function timer1(){
//     console.log("timer is completed ")
// },0)

// console.log("end");

// third code 
console.log("start");

function dummy(){
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("hello i am ayushman")
        },1000)
    })
}
setTimeout(function timer(){
 console.log("timer1")
 let y=dummy();
 y.then(function process(value){
    console.log(value);
 })
},0)

 
let x=Promise.resolve(123); 
x.then(function promisecall(value){
    console.log("which promise",value)
});

setTimeout(function timer1(){
    console.log("timer is completed ")
},0)

console.log("end");