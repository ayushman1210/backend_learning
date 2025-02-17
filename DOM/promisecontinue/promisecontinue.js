//  function to download some data from url and not use callbacks 

// writing of a promise 

function fetch(url){
    return new Promise(function (resolve,reject){
        console.log("start",url);
        setTimeout(function process(){
            let data="dummu";
            console.log("complete fetching data")
            // somehow we need to return the data 
            resolve(data); // return some data on success 
        },4000)
    })
}

function fetch(url){
    return new Promise(function(resolve,reject){
        for(let i=0; i<19383; i++){

        }
        console.log("auyush");
        resolve("ayush");
    })
}

function demo(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("hey")
            resolve("function completely done ")
        }, 1938);
        console.log("why man??")
    })
}

function demo2(x){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(function hello(){
            console.log("timer done ");
            
            if(x%2==0){
                resolve("even")
            }
            else{
                reject("odd")
            }
        },10000)
        console.log("done")
    })
};


function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(() => {
         let data="dummy data";
            console.log("downloaded data ");
            resolve(data);
            
        }, 2000);
        console.log("downloading started ")
    })
}

// console.log("starting tthe programme ")
// console.log("expecting some data ")
// x=fetchdata("www.google.com");
// console.log("new promise onject created ")
// console.log(x);


function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(() => {
            let data1=" data";
            console.log("downloading started")
            resolve(data1);
            resolve("ayush"); // these will not executed as promise is fullfilled only once 
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

// let data=fetchdata("www.google.com");
// let file=writedata(data);
// let respo=upload("filename","www.sptfgy.com");
// this code will not work in required fashion 

let download=fetchdata("www.google.com");
download.then(function process(value){
    console.log("download promise fullfilled");
  let write=writedata(value);
  write.then(function processwrite(value){
    console.log("writing promise fullfilled");
    let uploadata=upload(value);
    uploadata.then(function processupload(value){
        console.log("upload promise fullfilled ")
        console.log(value);
    })
  })
})

// these piece of code solve the inversion of control but still get promise hell

let download1=fetchdata("www.google.com")
download1.then(function processdata(value){
    console.log("downloading started ",value)
    // return "ayush";
    return value;
})
.then(function processdata(value){
    return writedata(value);
})
.then(function processupload(value){
    return upload(value);
})
// x.then(function process(value){
//     console.log("x is promise ",value);
// })

// .then also return a promise 
