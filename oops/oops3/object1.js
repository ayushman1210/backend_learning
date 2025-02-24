let obj={
    x:1,
    y:2
}
let another=obj;
const newobj=Object.create(obj);

newobj.x=99;
another.x=3;

console.log(another,newobj,obj)