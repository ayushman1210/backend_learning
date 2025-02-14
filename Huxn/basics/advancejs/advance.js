// synchronous nature 
// function myfun(){
//     console.log("hello")
// }
//  console.log("ayushman")
//  myfun();
//  console.log("hi");

 //asynchronouus code 

//  console.log("hel");
//  setTimeout(()=>{
// console.log('11')
//  },2000)
//  console.log("heio")

 //callback hell
//  function callbackhell(callback) {
//     setTimeout(() => {
//         const data="inside callbackhell";
//         console.log(data);
//         callback(data);
//     }, 2000);
    
//  }
// function first(data,callback) {
//     setTimeout(() => {
//         const processeddata=   `${data}-processed data`;
//         console.log("first function");
//         callback(processeddata);
//     }, 1000);
// }

// function second(data,callback) {
//     setInterval(() => {
//         const processeddata=`${data}- processed second `
//         console.log("inside second data")
//         callback(processeddata);
//     }, 1500);
// }

// callbackhell((data)=>{
//     first(data,(processeddata1)=>{
//         second(processeddata1,(processeddata2)=>{
//             console.log(`final result of the function is ${processeddata2}`)
//         });
//     });
// });


//callback not asynchronous all time 
// console.log("start")
// const number=[1,2,3,4]

// number.forEach((n)=>{
//     console.log(n);
// })

// console.log("end")

// console.log("start")
// function getuserdata(name,callback) {
//     setTimeout(() => {
//         console.log("getting username")
//         callback(name)
//     }, 2000);
// }
// function hobbies(name,callback) {
//     setTimeout(() => {
//        console.log("geeting hobbies of user") 
//        callback(['cricket','singing','dancing'])
//     }, 2000)
// }

// getuserdata("ayush",(data)=>{
//     console.log(data)
//     hobbies(data,(hobby)=>{
//         console.log(hobby);
//     })
// })
// console.log("end")

// promises 

// function check(number) {
// return new Promise((resolve,reject)=>{
//     if(number%2==0){
//         resolve(`the number is even `);
//     }else{
//         reject('the number is odd ');
//     }
// })    
// }

// check(7).then((message)=>{
//     console.log(`success`);
// }).catch((e)=>{
//     console.log(`error:${e}`);
// });

// function fetch() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data="inside fetch function"
//             console.log(data);
//             resolve(data);
//         }, 2000);
//     })
// }

// function first() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processeddata="inside fetch function"
//             console.log(`inside first func`);
//             resolve(processeddata);
//         }, 1500);
//     })
// }

// function second() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processeddata="inside fetch function"
//             console.log(`inside second func`);
//             resolve(processeddata);
//         }, 1000);
//     })
// }

// fetch().then((data)=>first(data)).then((processeddata)=>second(processeddata))
// .then(processeddata2)





























//async function 
// function fetchdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//              resolve("user data is reecieved ");
//         }, 3000);
           
//     });      
// }

// async function getdata() {
//     try {
//         const data=await fetchdata();
//         console.log(data);
//         console.log("remainnig task can be executed ");
//     } catch (error) {
//         console.log(error)
//     }
// }

console.log(fetch("text.txt"));

fetch("text.txt").then(res=>res.text()).then((data)=>console.log(data).catch((e)=>console.log(err)));