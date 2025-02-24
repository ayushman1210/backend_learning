const player={
    name:"virat",
    lastname:"kohli",
    numbertobat:"3",
    canbowl:"No",
    getdetail:function(){
        console.log(this.name,this.lastname,"batted at",this.numbertobat,"can he bowl",this.canbowl)
    }
}

const obj= function(x,y){
    console.log(x+y);
    console.log(this.getdetail());
}
// let x=obj.bind(player);
// x();
// obj.call(player,2,5);
obj.apply(player,[2,5]);
