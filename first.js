// // string 
// console.log("Ayushman");
// console.log('ayushman');
// console.log(`ayushman`);
// //numbers 
// console.log(3.92);
// console.log(-2);
// console.log(12);
// console.log(0);
// console.log(-0);

// //boolean
// console.log(false);
// console.log(true);

// //undefined ,null
// console.log(undefined);
// console.log(null);

// //object
// console.log({"ayushman": 123});

// //symbol
// console.log(Symbol('hello'));

// //typeof
// console.log(typeof 'ayushman');
// console.log( typeof 3.92);
// console.log( typeof false);
// console.log(  typeof undefined);
// console.log( typeof {"ayushman": 123});
// console.log( typeof Symbol('hello'));
// console.log( typeof undefined);
// console.log(typeof Infinity);
// console.log(typeof -0);
// console.log(typeof NaN);

// // variable 
//  let x=2;
//  var y=3;
//  const z ="ayushman";
//  console.log(x+y+" "+z);
//  console.log(typeof(typeof(12)));

//  // airthmetic operators +,-,*,/,%
//  console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// //note if we want the floor value 
// // 1 way --> parseint(5/2);
// 2way --> x=Math.ceil(5/2);
//  console.log(x);

// // assignment operators +=,-=,*=,/=,%=
// //logical operators && || !
// console.log((10>5)&&(7<6))
// console.log((10>5)||(7<6))
 // work as and or gate 

// // comparison operators > >= < <= != , !==, == ,===
// // string based operators (+) (concatenate two strings)
// // bitwise operators
// console.log(5 & 2); firstly convert into the binary code then apply the operation 
// console.log(5 | 3);
// console.log(5 ^ 3);
// console.log(5>>3);
// console.log(5<<3);
// //ternary operator 
// console.log((3>1)? "ayush":"kalyani");
// // unary opertors
// // ++x , x++
// //conditon 
// if(12>28){
//     console.log("ayush");
// }
// else{
//     console.log("kalyani");
// }

// if(11%2==0){
//     console.log("even no.")
// }
// else if(11%5==0){
//     console.log("divisibe by 5");
// }
// else if(11%11==0){
//     console.log("prime no.");

// }else{
//     console.log("odd no.");
// }
// console.log("(5>1)" && "ayushman");

// //loops
// let i=11; 
// while(i>0){
//     console.log(i);
//     i--;
// }
// for(let i=1; i<10; i++){
//     if(i%2==0){
//         console.log("break", i);
//       //   break;// IT WILL take you out from the nearest loop  whereas in continue it takes you to the nearest loop 
//     }
// }

// for(let i=1; i<10; i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// }
// // switch cases 
// let exp="+";
// let a=12;
// let b=3;
// switch(exp){
//     case "+":
//         console.log(a+b);
//         break;
//         case "-":
//         console.log(a-b);
//         break;
//         case "*":
//         console.log(a*b);
//         break;
//         case "/":
//         console.log(a/b);
//         break;
//         default:
//             console.log("invalid");
//             break;
// }
// // functions (just a touch here )

// function ayush(x){
//     console.log(x+10);
// return x*3; // return keyword return an output out the func and immediate stop the function 
// }
// console.log(ayush(3));

let g =console.log;
g(3);


// coercion
// console.log(1+"1");
// console.log(2+2);
// console.log("2"-"2");
// console.log(1-"1");

// console.log("123"+12);
// console.log(undefined -12);
// console.log(null-4);
// console.log(undefined-"12")
// console.log(undefined+12)
// console.log(null-"2");
// console.log("12fd"-12);
// console.log('@'-30);
// console.log(4-true);
//  console.log("0xf"-1); // hexadecimal number  //0x is the representation for hexadecimal \
// console.log(0xabcd);
// console.log(0xa);
// console.log("0o11"-1); // 0o for octal representation 
//  console.log(typeof []);

//  console.log(undefined+"12");
//  console.log(undefined+"null");
//  console.log("ayushman "+ [null,undefined]);

//value of _tostring 
// let a={"english":90, "math":100};
// console.log(a.toString());
// console.log(a.valueOf());

// let x=[1,2];
// console.log(x.toString());
// console.log(x.valueOf());
// console.log("ayushman"+ {a:50, valueOf() {return {}},toString() {return{}} })

// console.log(!0);
// console.log(!null);
// console.log(!-4);
// console.log(!{});
// console.log(! "");
// console.log(!console.log(4));

// console.log(NaN===24);
// console.log(NaN===NaN);
// console.log(null==undefined);
// console.log(10=="10");
// console.log('10'==10);
// console.log(false==0);
// console.log("10"== {valueOf()  {return 10}});
// console.log((0.3-0.1) == (0.4-0.2));
// console.log(0.2==0.2)
// console.log(1/0);
// function compute(){
//     return Value =NaN;
// }
// let x=compute();
// console.log(isNaN(x));
// let a=1;
// let b="ayush";
// console.log(isNaN(a-b));
// console.log(isNaN(a))
// console.log(isNaN(b));

// console.log(Number.isNaN(10));
// console.log(Number.isNaN('abc'));
// console.log(12=="-12")
// console.log(!NaN==1); 

// let a=5;
// if(a){
//     console.log("hi there");
// }
// if(a==true){
//     console.log("by bye");
// }

// function checkdirect(val){
// if(val<0){
//    console.log("left");
// }
// else{
//     console.log( "right");
// }
// }
// checkdirect(-12);
// console.log("hello");
// console.log("hero");


//boxing 

// 9.toString(); // show error
// (9).toString();
// 9..toString(); 
// let x=9;
// console.log(x.toString());

// scopes (global scope,functional scope, block scope)

// let name="ayushman"; //global scope 
// function greet(){
//     console.log("hello",name);
// }
// function fu(){
//     let x=10;//functional scope 
//     console.log("hi",name);

// function test(){
//     console.log(x); 
// console.log("h",name);
// }
// test();
// }
// console.log(x);
// greet();
// fu();

// {
//     let x=10;
//     console.log(x); //block scope 
// }

// function fun(){
//     console.log(x) // due to lexical scoping it get the value undefined 
//     var x =10;
//     console.log(x);
// }
// {
//     var y=12;
// }
// console.log(y);
// console.log(x);
// fun();

// if(true){
//     var z=12;
// }
// if(false){
//     var a=15;
// }
// console.log(z);
// console.log(a);
// {
// let x=10;
// }
// console.log(x);

// function fun() {
//     console.log(y); 
//     let y=10;
//     console.log(y);
// }
// fun();
// console.log(y);

//redecleration 
// var x=10;
// var x=9;
// let x=10;


// console.log(x);

 

// var teach="ayush";
// function fun() {
//     console.log(subject)
//     var teach="ayuhs";
//      teaching="kalyani";
//      var subject="maths";
//     console.log(teach);
//     console.log(teaching)
// }
// console.log(teaching);
// fun();
// console.log(teaching);

// var teach="ayush";
// function fun() {
//     var teach="kalyani" ;
//     console.log(teachingasssistant);
//     teachingasssistant="ayushman";//this will become autoglobal
//     // console.log(teach,teachingasssistant);
     
// }

// console.log(teach)
// fun();

// function run(){
//     var student;
//     console.log(student, typeof subject)
//     console.log(subject);
//     var subject="maths";
//     console.log(teach);
// }
// console.log(teach);
// // fun();
// run();

// function fun(){
//     teach="js";
//     console.log(teach);
//     var teach="ayuhs";
// }

// fun();

// var fun=10;
// function gun(){
//     console.log("hello world")
// }

// gun();
// fun();

// var gun=10;
// function gun(){
//     console.log("hello world")
// }

// gun();
// gun();

// hoisting--> execution of function before declaration 

// gun();
// function gun(){
//     console.log("hello world")
// }

//  function fun(){
//     teaching="je";
//     console.log(teaching)
//  }
 
//  function gun(){
//     'use strict'; //this will make to use the scpe of a variable 
//     teaching="hello";
//     console.log(teaching)
//  }

//  fun();
// gun();

// var x=10;

// console.log(x);

// // we can allocate it as a block scope
// {let x=20;
// }

//second method is iife (imediately invoked function expression)
// function fun(){

// }


//  this is a function expression (not starting with the keyword function keyword )
// (function (){})
// let ayush= function(){

// }

// let fact=function(n){
//    if(n==0) return 1;
//    return n*fact(n-1);
// }
// console.log(fact(5));
// {
//   var x=10;
// }
// console.log(x);
 

// function fun() {
//    console.log("fun is called")
// }

// function gun(fn){
//    console.log("inside")
//    fn();
//    console.log('outside')
// }

// gun(fun);

// anonymous function expression  they are hard to debug 

// gun(function(){
//    console.log("hello")
// })

// read about argument.callee

// function hey(){
//    function why(){
//       console.log("hey")
//    }
//    // why();
//    console.trace();
// }
// hey();
// x();
// var x=function gun(){
//    console.log("hello")
// }

// x();

