// function fetchdata(url){
//     return new Promise(function(resolve,reject){
//         console.log("start");
//         setTimeout(() => {
//             let data1=" data";
//             console.log("downloading started")
//             resolve(data1);
//             resolve("ayush"); // these will not executed as promise is fullfilled only once 
//         }, 2000);
//     })
// }

// function writedata(info){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let data="dummy data";
//             console.log("writing started",info)
//             resolve(data);
//         }, 2000);
//     })
// }

// function upload(filename,url){
//     return new Promise(function(resolve,reject){
//         console.log("uploading starts")
//         setTimeout(() => {
//             console.log("file uploaded ",filename)
//             let file="a.txt";
//             resolve(file);
//         }, 2000);
//     })
// }

// async function processing(){
//     let downloaddata=await fetchdata("www.google.com");
//     console.log("download await complete")
//     let write=await writedata("hello");
//     console.log("write await complete");
//     let uploaddata=await upload(File,"www.google.com");
//     console.log("your response complete ",uploaddata);

//     return true;
// }
// console.log("starting")
// processing();
// console.log("end")


// second example 

function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(() => {
            let data1=" data";
            console.log("downloading started")
            resolve(data1);
        }, 2000);
    })
}

async function hello(){
    console.log("start");
let data2=await fetchdata("www.goggle.com");
console.log("google data done",data2);
let data3= await fetchdata("www.youtube.com");
console.log("youtube done");

return data2+data3
}

console.log("starting");
setTimeout(function timer1(){
    console.log("timer1");
},0)
console.log("after timer1");
let x=hello();
x.then(function(value){
console.log("finally processing resolve ",value)
});

setTimeout(function timer2(){
    console.log("timer2");
},1000)
setTimeout(function timer2(){
    console.log("timer3");
},0)
console.log("end");