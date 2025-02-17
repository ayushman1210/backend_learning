// how js handle async opertion 

// js is a single threaded lang
// js by default only supports synchronous code execution
// this property of synchronous code execution only work for operation natively known to javascript 

//sync 
// console.log("hello")
// for(let i=0; i<10000000000000; i++){
//     // console.log("hey");
// }
// console.log("hello")

//async
// console.log("hekki");
// setTimeout(function fun() {
// console.log("hello");
// },2000);
// console.log("goa");

// JS Runtime
//  js made to run inside browser only so browser acted as runtime which gives more feature to js  such as dom api settimeout 
// node was developed by ryon dahl in 2009 and developed a new runtime node where we can access filesystem osprocessor set timeout it provide js much more feature to js it exclude browser and include much more feature 

//  function process(){
//     console.log("start");
//     setTimeout(() => {
//         console.log("hello")
//     }, 2000);
//     for(let i=0; i<10000000; i++){

//     }
// console.log("end");
//  }

//  process();
// setTimeout(() => {
//     console.log("hell")
// }, 2000);
// console.log("hey") //global code 

// there are callstack heap etc things in the js but there is also event queue and event loop present suppose we run the upper code it gives firstly native js code output why 
// because it will pass the settimeout function to the js runtime so it will execute the code there and the remainnig native code start to perform task and if settimeout task time is done 
// it will sent to event queue and then the event loop(infinite loop) again again check whether the native js code executed or not if its done then the setimeout function will gives the output  

// conditon to start executing task from event queue is that 
// 1) the callstack should be empty ie no function is the callstck is left to be executed 
// 2) globaal code is done 

// function process(){
//     console.log("start");
//     for(var i=0; i<3; i++){
//         setTimeout(function exec() {
//             console.log('executed ')
//         }, 3000);
//         console.log("hero")
//     }

//     for(var i=0; i<10000000; i++){

//     }
// }

// process();

function fun(){
    console.log('hey');
    setTimeout(function exec()  {
        console.log("why")
    }, 7000);
    setTimeout(function exec()  {
        console.log("when")
    }, 3000);
}

fun();
// for(var i=0; i<100; i++){

// }
setTimeout(function last() {
    console.log("last function ")
}, 3000);