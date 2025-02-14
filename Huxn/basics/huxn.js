// console.log("hello");
// console.table({name: "ayushman" , age:12});
// let firstname="ayushman";
// let lastname="gupta";
// let fullname=firstname.concat(lastname);
// console.log(fullname);

// console.log(fullname.includes('a'));
// let name=`${firstname}${lastname}`;
// console.log(name);

// let faln=`khurrana`
// let fafn=`ayushman`
// let name= `${faln}${fafn}`
// let fullname=faln.concat(fafn);
// console.log(name.toUpperCase());

// // string to number 
// let ruppees="10";
// ruppees=parseInt(ruppees);
// console.log(typeof ruppees);

// //number to string 
// ruppees=ruppees.toString();
// console.log(typeof ruppees);

// let password="13487";
// if(password.length==8){
//     console.log(`welcome`);
// }
// else if(password.length<8){
//     console.log(`password is to small`);
// }
// else{
//     console.log(" password is strong ");
// }

// let fruit=`apple`;
// switch(fruit){
//     case "banana":
//         console.log(`banana is good `);
//         break;
//         case "orange":
//             console.log(`i am not fan of orange `);
//             break;
// default:
//     console.log(`i have never heard of this fruit `);
//         }

// let first=`ayushman`;
// let last=`gupta`;
// let name=first+last;
// for(let i=0; i<1000; i++){
//     console.log(name+" "+i)
// }
// let i=10;
// while(i<100){
//     console.log("ayush",i);
//     i++;
// }
//  let i=20;
//  do{
//     console.log("ayush");
//     i++
//  }while(i<400);


// favsinger=[`ayush`, `samriddh`, `kalyani`];
// console.log(favsinger[1])

// let mixedarr=[`123`,`ayush`, `array`];
// console.log(mixedarr[0])
// console.log(mixedarr[2])
// console.log(mixedarr[1])

// const person ={
//     name:"ayushman",
//     age:12,
//     location:[`earth`,`india`,`up`,`gonda`,`babaganj`],
// }
// person.class=`btech`;
// delete person.class;
// console.log(person);

// const car={
//     type:[`normal`,`supercar`,`luxury`],
//     model:[`s8`,`s9`,`s10`],
//     color:`white`,
// };
// car.type=`toyota`;
// car.wheels='';
// console.log(car);

// function myfunc(num1,num2){
//     return num1*num2;
// }
// console.log(myfunc(3,3));


// function greet(greeting){
//     console.log(`good ${greeting}`)
// }

// greet("morning");


//  const morning = function greet(greeting){
//     console.log(`good ${greeting}`);
// }

// morning("morning");

// function myfunc(name,callback){
//     console.log(`hello ${name}`)
//     callback();
// }

// function callback(){
//     console.log(`i am learning `)
// }
 
// myfunc(`ayushman`, callback);

// function showmyfunc(fn){
//  const value=10;
//  fn(value);
// }

// function fn(value){
//     console.log(value);
// }

// showmyfunc(fn);


// const person={
//     name:`ayushman`,
//     age:12,
//     greet:function(){
//         console.log(`hello my name is ${person.name} and i am ${person.age} year old ` );
//     }
// };
// console.log(person.greet());

// const person= {
//     "name":"ayush",
//     "age":20,
//     "email":"ayushmangupta@gmail.com",
//     "city":"gonda"
// }

// const gh= JSON.stringify(person);
// const parse=JSON.parse(gh);
// console.log(gh);
// console.log(parse);


// const current =new Date();
// const year=current.getFullYear();
// const month=current.getMonth();
// const day=current.getDay();
// const hour=current.getHours();
// const minutes=current.getMinutes();
// const seconds=current.getSeconds();
// const miliseconds=current.getMilliseconds();
// console.log(`year:${year} ${month} ${day} ${hour} ${minutes} ${seconds} ${miliseconds}`);
// console.log(current.toString());
// console.log(current.toISOString());
// console.log(current.toLocaleString());
// const date= new Date();
// date.setDate=(date.getDate()+1);
// console.log(date);

// setInterval(()=>{
//     console.log("i am ayushman")
// },2000
// );

// setTimeout(function () {
//     console.log(`helll0`);
// },3000);

// const id= setInterval(function(){
//     console.log(`this is learning`);
// },2000);

// setTimeout(function()  {
//     clearInterval(id);
//     console.log(`hello !`);
// },20000);

// template literals 

// function info(){
//     return `i am ayushman `
// }

// console.log(`${info()}`);

// let firstname=`ayushman`;
// let lastname="gupta";

// console.log(`${firstname} ${lastname}`);

// arrow function

// hello=(username)=>  `hello ${username} `;

// console.log(hello('ayyushman'));

// double = (number)=>{
//     return  number*2;
// }
// console.log(double(2));

//  const hello=(text) => {
//     console.log(`hello ${text}`)
// };

// console.log(hello(`kalyani`));

// function user(name,age,sex){
//     return {
//         name:name,
//         age:age,
//         sex:sex,
//     }
// };

// const ayushman=user('ayushman','19','male');
// const kalyani=user('kalyani','19','female');
// console.log((ayushman));
// console.log(kalyani);

// function numb(a,b,c){
//     return{
//         num1:a,
//         num2:b,
//         num3:c,
//     }
// };

// const number=numb('1','2','3');
// console.log(number);


// const lib={
// sum:(a,b)=>{
//     return a+b;
// },
// multi:(a,b)=>{
//     return a*b;
// }
// };
// console.log(lib.sum(3,2));

// function es5(name,age){
//     return {
//         name:name,
//         age:age,
//     }
// }
// const user=es5("ayushman", "12")
// console.log(user);

// function es6(name,age){
//     return {name,age}
// };

// const res=es6('ayush',"12");
// console.log(res);

// function multiply(a,b=1){
// return a*b;
// }
// console.log(multiply(3));

//... spread operators 
//  let arr=[`ayush`,`kalyani`,`ayush`];
// let arr1=['kane', ...arr];
// console.log(arr1);

// const obj={x:1, y:2}
// const obj2={z:3};
// const obj3={...obj2, ...obj};
// console.log(obj3);

// rest parameter 
// function user(...userdetail){
//     console.log(userdetail);
// }

// user('ayush','12','gonda');

// function unlimit(...amt){
//     console.log(amt);
// }

// unlimit(`akdj`,`jnd`,`sjd`,`wndkwd`,`dkd`);

//destructuring 
// const foo =['1','2','3']
// const [one]=foo;
// const [food,speed,car]=foo
// console.log(car);
// function f(){
//     return [1,2];
// }

// let a,b;
// [a,b]=f();
// console.log(a);
// console.log(b);

// function f(){
//     return [1,2,3];
// }

// let a,b;
// [a,,b]=f();
// console.log(a);
// console.log(b);

//assigning the rest of array to variable 
// const  [a, ...b]=["one","two","three"];
// console.log(b);

// const color=['red','blue','black','purple'];
// const [color1,color2,color3]=color;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// const student ={name:"ayush", class:"12", sex:"male"};
// const {coolor}=student;
// console.log(coolor);

// const person={
//     name:"ayush",
//     age:30,
//     gender:"male",
//     count:"indiia",
// };

// const {name,age}=person;
// console.log(name);
// console.log(age);

// const {name:personname, age:personage}=person;
// console.log(personname);
// console.log(personage);


// function person1({name, age, count}){
//     console.log(`name:${name}`);
// console.log(`age:${age}`);
//     console.log(`country:${count}`);
// }

// person1(person);
// let options={
//     title:"menu",
//     items:[item1,item2],
// }

// function menu({title,width:w=100, height:h=200, items:[item1, item2]}){
//     console.log(`${title} ${width} ${h}`);
//     console.log(item1);
//     console.log(item2);

// }

// menu(options);

// nested destructuring 
// const song =[
//     {Name:"ayushman", singer:"ayush"},
//     {Name:"ayushman", singer:"aush"},
//     {Name:"ayushman", singer:"ayuh"},
//     {Name:"ayushman", singer:"aysh"},
// ];
// const [, , {singer}]=song;
// console.log(singer);

// const data={
//     user:{
//         id:123,
//         name:"ayush",
//         age:30,
//         country:"india",
//         adress:{
//             city:"gonda",
//             town:"babaganj",
//         },
//         hobbies:[
//             "cricket","football","hockey"
//         ],
//         score:{
//             maths:84,
//             science:90,
//             english:94
//         },
//         products:[
//             { id:1, name:"laptop", price:100},
//              {id:2, name:"laptop", price:10000 },
//             { id:3, name:"laptop", price:100000 },
//         ],
//         language:"english",
//     },
// };

// const {
//     user:
//    { name,age,adress:{city,town},
//     hobbies,
//     score:{maths,science,english}
//  },
//  products,
// }=data;
// console.log(`${name}`)
// console.log(`${city}`)
// console.log(`${maths}`)
// console.log(`${product1.price}`)
// console.log(`${hobbies}`)

// const data = {
//     user: {
//         id: 123,
//         name: "ayush",
//         age: 30,
//         country: "india",
//         adress: { 
//             city: "gonda",
//             town: "babaganj",
//         },
//         hobbies: [
//             "cricket", "football", "hockey"
//         ],
//         score: {
//             maths: 84,
//             science: 90,
//             english: 94
//         },
//         products: [
//             { id: 1, name: "laptop", price: 100 },
//             { id: 2, name: "laptop", price: 10000 },
//             { id: 3, name: "laptop", price: 100000 },
//         ],
//         language: "english",
//     },
// };

// const {
//     user: {
//         name,
//         age,
//         adress: { city, town },
//         hobbies,
//         score: { maths, science, english },
//         products, 
//     },
// } = data;

// // Now you can work with products as an array
// console.log(name); // "ayush"
// console.log(city); // "gonda"
// console.log(maths); // 84
// console.log(products[0].price); // 100 (first product's price)
// console.log(hobbies.join(", ")); // "cricket, football, hockey"

// // Optionally, if you want to destructure products into separate variables
// const [product1, product2, product3] = products;
// console.log(product1); // { id: 1, name: "laptop", price: 100 }

// conditional operator 
// let age=13;
// let res= (age>13)? "hello":"bye";
// console.log(res);

// let person={
//     name:"ayush",
//     age:12,
//     gender:"male"
// }

// for(let keys in person){
//     console.log(keys, person[keys]);
// }

// let list=['one','two','three'];

// for(let indexs in list){
// console.log(indexs,list[indexs]);
// }

// const object={a:1,b:2,c:3};
// for(let keys in object){
//     console.log(keys,object[keys]);
// }

// let lists=['one','two','three'];

// for(let list of lists){
//     console.log(list,lists[list]);
// }

// const  text="ayushman";
// for(let char of text){
//     console.log(char);
// }

// const array=["a","b","c"];
// for(let number of array){
//     console.log(number)
// }

// const color=['blue','red','black'];
// // for(let i=0; i<color.length; i++){
// //     console.log(`${color[i]}:${i}`);
// // }

// const clr= color.forEach((colors,arr,index) => {
//     // console.log(colors);
//     arr[index]=colors[0].toUpperCase() + colors.substring(1);
// });

// console.log(color);


// let array=[1,2,3,4,5,6,7,8,9,0]
// let sum=0;
// for(let i=0; i<array.length; i++){
    
//     sum+=array[i];
// }
// function adder(array){
//     sum+=array;
// }
// array.forEach(adder);
// console.log(sum);

// let number=[1,2,3,4,5]
// let double=number.map(num=> num*2);
// let numbers=number.forEach(numbers => {
//     console.log(numbers*2);
// });
// console.log(double);
// console.log(numbers);

// let people=[
//     {
//         name:"ayush", lastname:"gupta",
//     },
//     {
//         name:"ayushm", lastname:"gupta",
//     },
//     {
//         name:"ayushw", lastname:"gupta",
//     }
// ]

// const man= people.map((people)=>{
//     return [people.name]
// });

// console.log(man);

// let people=[
//     {
//         name:"ayush", lastname:"gupta", time:39,
//     },
//     {
//         name:"ayushm", lastname:"gut", time:21,
//     },
//     {
//         name:"ayushw", lastname:"gupa", time:49,
//     }
// ];

// console.log(people.filter((people) =>people.time>30));

// let ages=[12,32,18,78,90];
// function checkage(ages){
//  return ages>=18;
// }

// const res=ages.filter((checkage));
// console.log(res);


// const words=[
//     "spray",
//     "ayushman",
//     "kalua",
//     "present",
// ];

// function wordcheck(words){
//     return (words.length)>6;
// }

// const res=words.filter((wordcheck));
// console.log(res);

// let people=[
//     {
//         name:"ayush", lastname:"gupta", time:39,
//     },
//     {
//         name:"ayushm", lastname:"gut", time:21,
//     },
//     {
//         name:"ayushw", lastname:"gupa", time:49,
//     }
// ];
// const re= people.find((person)=>person.name=="ayush");
// console.log(re);

// const post=[
// {id:1, content:"goodpost"},
// {id:2, content:"funnypost"},
// {id:3, content:"sadpost"}
// ];

// const res=post.find((post)=> post.content=="funnypost");
// console.log(res);

// const ages=[3,10,18,20];
// const res=ages.find((ages)=> ages>18);
// // console.log(res);

// let people=[
//     {
//         name:"ayush", lastname:"gupta",
//     },
//     {
//         name:"ayushm", lastname:"gupt",
//     },
//     {
//         name:"ayushw", lastname:"gupa",
//     }
// ];

// const res=people.find((people)=>people.lastname="gupt");
// console.log(res);

// every() and some() function
// const people=["ayujs","kalyqsq","sama"];
// const res=people.every((people)=>(people.length)==4);
// const res1=people.some((people)=>(people.length)==4);
// console.log(res);
// console.log(res1);


// let people=[
//     {
//         name:"ayush", lastname:"gupta", time:39,
//     },
//     {
//         name:"ayushm", lastname:"gut", time:21,
//     },
//     {
//         name:"ayushw", lastname:"gupa", time:49,
//     }
// ];

// const res=people.every((people)=>(people.time)>40);
// const res1=people.some((people)=>(people.length)>=39);
// console.log(res);
// console.log(res1);

// let people=[
//     {
//         name:"ayush", lastname:"gupta",
//     },
//     {
//         name:"ayushm", lastname:"gupt",
//     },
//     {
//         name:"ayushw", lastname:"gupt",
//     }
// ];

// let last=true;
// let alllast=false;

// const names=people.every((people)=>people.lastname=="gupt");
// const namw=people.some((people)=>people.lastname=="gupt");
// console.log(names);
// console.log(namw);

//reduce() method 

// const numbers=[1,2,3,4,5]
// const sum=numbers.reduce((p,c)=>
//     { console.log(`previous ${p}  current ${c}`);
//         return p+c},0)
// console.log(sum);

// let people=[
//     {
//         name:"ayush", lastname:"gupta",age:12,
//     },
//     {
//         name:"ayushm", lastname:"gupt",age:40,
//     },
//     {
//         name:"ayushw", lastname:"gupt",age:18,
//     }
// ];

// const oldest=people.reduce((p,c)=>(c.age > p ? c.age:p),0);
// console.log(oldest);

//map 
// const map=new Map();
// const keyone="string"
// const keytwo={}
// const keythree= function(){}

// map.set(keyone,"value of key one");
// map.set(keytwo,"value of key two");
// map.set(keythree,"value of key three");

// console.log(map.keys);
// console.log(map.values());
// console.log(map.delete(keytwo));
// console.log(map.size);
// console.log(map);

// for(let[key,value] of map){
//     console.log(`${key}-- ${value}`)
// }


// for(let key of map.keys()){
//     console.log(key);
// }

//sets (only passes unique values )

// const initialv=[1,2,2,3]
// const myset=new Set(initialv);

// const myset=new Set();

// myset.add("ayushman");
// myset.add("aryan");
// myset.add("kalyani");

// console.log(myset.has("aryan")); // return true if the set have the element 

// myset.delete('ayushman');
// myset.clear();
// console.log(myset);

// for(let item of myset){
//     console.log(item);
// }

// const myset=new Set();
// myset.add("a");
// myset.add("b");
// myset.add("c");

// for(let items of myset){
//     console.log(items);
// }

//*Symbol are the immutable(value can not be changed ) datatype and unique 

// const mysymbol= Symbol("my symbol");
// console.log( mysymbol);

// comparing symbols 
// const mysymbol= Symbol("my");
// const mysymbol1=Symbol("my");

// const obj={};
// obj[mysymbol]="value1";
// obj[mysymbol1]="value2";


// console.log(obj);


// console.log(mysymbol==mysymbol1);

