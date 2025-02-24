class category {
    constructor(c){
        this.categoryname=c;
    }
    getcategoryname(){
        console.log('category is',this.categoryname);
    }
}

class product extends category{
    constructor(n,p,c){
        super(c);
        this.name=n;
        this.price=p;
    }

    display(){
        console.log("details of the products");
        console.log("name",this.name);
        console.log('price',this.price);
        this.getcategoryname();
    }
}

let p= new product("iphone","100000","electronics");
console.log(p);