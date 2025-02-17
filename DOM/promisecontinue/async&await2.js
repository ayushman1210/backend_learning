// function fun(){
//     return new Promise(function f(resolve,reject){
//         setTimeout(function process(){
//             console.log("resolved")
//             resolve(123);
//         },5000)
//     })
// }

// let x=fun();
// x.then(function exec(value){
// console.log(`resolved value which is passed ${value}`)
// return 100;
// })

// x.then(function exectu(value){
//     console.log('resoved value is ',value)
//     return 200;
// })
// .then(function exect(value){
//     console.log(value);
// })

// async function fun(){
//     console.log("start");
//     let x=await 20;
//     console.log("end");
//     return x;
// }
// console.log("starting ")
// let val=fun();
// val.then(function (value){
//     console.log("resolved ",value)
// })
// console.log("ending")

//async await hell 

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

function writedata(info){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            let data="dummy data";
            console.log("writing started",info)
            resolve(data);
        }, 2000);
    })
}

function upload(filename,url){
    return new Promise(function(resolve,reject){
        console.log("uploading starts")
        setTimeout(() => {
            console.log("file uploaded ",filename)
            let file="a.txt";
            resolve(file);
        }, 2000);
    })
}

async function processing(){
    let downloaddata=await fetchdata("www.google.com");
    let write=await writedata("hello");
    let uploaddata=await upload(File,"www.google.com");
    let downloaddata2=await fetchdata("www.google.com");
    let write2=await writedata("hello");
    let uploaddata2=await upload(File,"www.onedrive.com");
    let downloaddata3=await fetchdata("www.google.com");
    let write3=await writedata("hello");
    let uploaddata3=await upload(file,"www.youtbe.com");
    return upload+uploaddata2+uploaddata3;
}


async function process1(){
    let downloaddata=await fetchdata("www.google.com");
    let write=await writedata("hello");
    let uploaddata=await upload(File,"www.google.com");
    return uploaddata;
}

async function process2(){
    let downloaddata=await fetchdata("www.google.com");
    let write=await writedata("hello");
    let uploaddata2=await upload(File,"www.onedrive.com");
    return uploaddata2;
}

async function process3(){
    let downloaddata=await fetchdata("www.google.com");
    let write=await writedata("hello");
    let uploaddata3=await upload(File,"www.youtbe.com");
    return uploaddata3;
}

console.log("starting")
// processing();
Promise.all([process1(),process2(),process3()]).then(function process(value){
    console.log(value)
})
console.log("end")