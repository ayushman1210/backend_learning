//  this keyword

// console.log(window);
// console.log(this);
// console.log(this==window);

// window.firstname="ayushman";
// this.lastname="ayush"
// console.log(window)

// const res=function hello(){
//     return this;
// }

// console.log(res())

// const ob={
//     username:"ayush",
//     lastname:"gupta",
//     fullname: function(){
//         return `${this.username} ${this.lastname}`; //owner object 
//     }
// }

// const res=ob.fullname();
// console.log(res);


// const ob={
//     username:"ayush",
//     lastname:"gupta",
//     fullname: ()=>{
//         return this; //refer the window object 
//         // return `${this.username} ${this.lastname}`; //gives undefined on the use of arrow function 
//     }
// }

// const res=ob.fullname();
// console.log(res);


// const person={
//     name:"ayushman",
//     age:18,
//     detail:function(){
//         return `${this.name} ${this.age} `
//     }
// }

// const res=person.detail();

// console.log(res);

// const person1={
//     username:"ayushman",
//     age:18,
//     detail:()=>{
//         return `${this.name} ${this.age}`
//     }
// }

// const res1=person1.detail();
// console.log(res1);

//factory function

// function create(firstname,lastname,age){
//    return{
//     firstname: firstname,
//    lastname:lastname,
//    age:age,
//    detail: function(){
//     console.log(`hello my name is ${this.firstname} ${this.lastname} and age is ${age} `)
//    }
// }
// }

// const ayushman=create("ayushman","gupta", "18")
// const kalyani=create("kalyani","gupta", "18")
// const samiddh=create("samriddh","gupta", "18")
// const ashish=create("ashish","gupta", "18")
// console.log(ayushman,kalyani,samiddh,ashish)

// ayushman.detail();

// function vechicle(type,brand,model,year) {
//    return{ type:type,
//     brand:brand,
//     model:model,
//     year:year,
// }
// }

// function vechicle(type,brand,model,year) {
//     return{type,brand,model,year}
    
// }
// const ford=vechicle("affordable","Lt32","wq01","2010")
// const tata=vechicle("middleclass","Lt32","wq01","2016")
// const nexon=vechicle("afford","Lc354","wq101","2013")
// const ferarri=vechicle("luxury","L23","1wq01","2020")


// console.log(ford);


// constructor function

// function Createpeople(firstname,lastname,age) {
//     this.firstname=firstname,
//     this.lastname=lastname,
//     this.age=age,
//     this.info= function(){
//         console.log(`hi i am ${firstname} ${lastname}`)
//     }
// }


// // new keyword 
// // set this to point that object
// //return using new keyword 
// const ayush=new Createpeople("ayush", "gupta","18")
// const kalyani=new Createpeople("kalyani","gupta","18")
// console.log(ayush,kalyani);
// ayush.info();

// function Book(title,author,year) {
//     this.title=title;
//     this.author=author;
//     this.year=year; 
// }

// const hope=new Book("hope","steve","2000");
// console.log(hope);

// function Person(name,age,gender) {
//     this.name=name;
//     this.age=age;
//     this.gender=gender;
//     this.info=function(){
//         console.log(`hi my name is ${name} ${age} ${gender}`)
//     }
// }

// const kalyan=new Person("kalyan","18","male");
// console.log(kalyan);
// kalyan.info();

// function Car(name,model,year,color){
// this.name=name;
// this.model=model;
// this.year=year;
// this.color=color;
// this.start= function(){
//     console.log(`this car ${name} will start`)
// }
//     this.stop=function(){
//         console.log(`this car ${name} will stop `)
//     }
// }

// const car=new Car("toyota","elr23","2004","black")
// const car1=new Car("ford","12we","2001","silver")

// car.start();
// car1.stop();


// builtin constructor 
// const num1=new Number(10);
// const st= new String("ayushman")
// const bool1=new Boolean(false);
// const arr1= new Array(1,2,3);
// console.log(num1);
// console.log(st);
// console.log(bool1);
// console.log(arr1);

// oject.create() method 

// let person={
//     greet:function(){
//         console.log(`hello my name is ${this.name} ${this.age}`)
//     }
// }

// const ayush= Object.create(person);
// ayush.name="ayush";
// ayush.age="18";
// ayush.greet();

// const kalyan=Object.create(person,{
//     name:{value:"kalyan"},
//     age:{value:18},
// });

// console.log(kalyan.name,kalyan.age);
// ayush.greet();

// obj._proto_


// const obj={};
// console.log(obj.__proto__);
// console.log(obj.constructor.prototype);
// console.log(Object.getPrototypeOf(obj));


// changing the Builtin method
// console.log(Array.prototype);

// Array.prototype.pop=function(){
//     return "pop it baby"
// }


// const myarr=[1,2,3,4];

// console.log(myarr.pop());
// console.log(myarr)

// inheritence 

// function animal(name) {
//     this.name=name;
// }
// animal.prototype.sound=function(){
//     return "animal sound "
// };

// const animal1=new animal("frog");
// console.log(animal1);

// function Dog(name,breed){
//     animal.call(this,name);
//     this.breed=breed;
// }

// Dog.prototype=Object.create(animal.prototype);
// Dog.prototype.bark=function(){
// return "woof";
// }

// const dog1=new Dog("buddy","genus");
// console.log(dog1);
// console.log(dog1.sound());
// console.log(dog1.bark());

// // classes this is the blueprint of the object   

// class person {
//     constructor(firstname,lastname,age) {
//         //instance member area
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.age=age;
//         this.info=function(){
//             return `name:${firstname}${lastname}and age is ${age}`
//         }
//     }

    //prototype members 
//     greet(){
//         return `helllo there ${this.firstname}`
//     }
// }

// const ayush=new person("ayush","gupta","19")
// console.log(ayush);
// console.log(ayush.info());
// console.log(ayush.greet())
