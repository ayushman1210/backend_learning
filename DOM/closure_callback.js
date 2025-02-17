// 9 December
//set-timeout --> it is a func that help us toe excute certain task once  after some time 
//set-interval --> func that help to execute certain task again and again  after certain interval 
// these twoo function are not default given by the js 
// callback it is a func that is passed to another function

// function fun(x,fn){
//     for(let i=0; i<x; i++){
//         console.log(i);
//     }
//     fn();
// }

// fun(10,function hello(){
//     console.log("hello");
// })
// fun(10,function (){
//     console.log("hello");
// })

// function hello(){
//     console.log("hello");
// };
// fun(10,hello);


// // let arr=[1,2,3,4,5];
// // let x=arr.map(function process(i,v) { // all the elements of the given array it passes the elements as the argument to the callback 
// //     console.log(i,v); // i-->indexes and v-->value
// //     return v*v;
// // });
// // console.log(arr);
// // console.log(x);

// function mapper(arr,fn){

//     let result=[];
//     for(let i=0; i<arr.length; i++){
//        let res= fn(arr[i],i);
//        result.push(res);

//     }
//     return result;
// }

// let arr=[1,2,3,4,5];
// let x=mapper(arr,function cube(v,i){
//     console.log(i,v,v*v*v);
//     return v*v*v;
// });

// console.log(x,arr);




// setTimeout(taskcallback,time in millisecond)
// setTimeout(taskcallback,time in millisecond)


// setTimeout(function hello() {
//     console.log("hello")
// }, 3000);



// let id1=setTimeout(function hello() {
//     console.log("hello kidda")
// }, 10000);


// let id2=setTimeout(function hello() {
//     console.log("hello")
//     clearTimeout(id1);
// }, 1000);


// setTimeout(() => {
//     window.alert("why you login")
// }, 10000);

// setInterval(() => {
//     console.log("hello")
// }, 1000);

 let id=setTimeout(() => {
        console.log("hello")
    }, 1000);

    // setInterval(() => {
    //    clearInterval(id)
    // }, 13000);
console.log(typeof id);
