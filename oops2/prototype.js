function phone(n){
    this.name=n;
}

let d=new phone("samsung");
phone.prototype.display=function(){
    console.log("name of product",this.name);
}
d.display();
