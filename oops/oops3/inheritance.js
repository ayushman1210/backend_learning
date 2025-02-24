function product(p,n,c){
    this.name=n;
    this.price=p;

    category.call(this,c)
}

function category(c){
    this.categoryname=c;
   
}

product.prototype=Object.create(category.prototype)

let p=new product("iphone","1000","electric");
category.prototype.getcategoryname=function (){
    console.log("callled")
    console.log(this.categoryname);
}
p.getcategoryname();