class product{
    discount=10;
    constructor(n,p){
        this.name=n;
        this.price=p;
    }
  
    displayproduct(){
        console.log(this.name);
        console.log(this.price,this.discount);


    }

    buyproduct(){

    }
}

let iphone=new product("iphone",13249);
let macbook=new product("macbook",289231);

iphone.displayproduct();


console.log(iphone,macbook);

console.log(typeof macbook);