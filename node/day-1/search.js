function linear(arr,x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==x)
        return i;
    }
    return 0;
}
// module.exports={
//     linearsearch:linear
// }
module.exports=linear;