
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

// let x=fetchdata("www.goggle.com");
// x.then(function(value){
// console.log("sucess",value)
// },function err(err){
//     console.log("error is",err)
// });

// or 

let x=fetchdata("www.goggle.com");
x.then(function success(value){
console.log("sucess",value)
return 10;
})
.then(function success1(value){
console.log("value is ",value)
throw {error:"new error"}
})
.catch(function error(err){
    console.log(err)
})
.finally(()=>{
    console.log("experiment complete ")
})