let arr=[1,2,3,4];
console.log(typeof arr);


let obj={
    x:10,
    y:20
}
obj.z=20;
Object.freeze(obj); //neither we can add nor update old one 
obj.a=20;
console.log(obj);


let obj1={
    x:10,
    y:20,
}
Object.seal(obj); // we can add but we can update 
obj1.x=30;
obj1.z=99;

console.log(obj1)
