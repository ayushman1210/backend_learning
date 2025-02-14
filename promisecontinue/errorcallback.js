function fetch(url,fn){
    //download content of url and it takes some time 
    //we will download and pass the result to the callback 
  url= console.log("start");
    setTimeout(function process()  {
        console.log("downloaded")
        let response="dummy data";
        // fn({error:"error"},response);
        fn(new Error("something "),response)
    }, 3000);
}
fetch("www.goggle.com",function(err,data){
    if(err){
        console.log("error is ",err)
    }
    else{
        console.log("response is ",data)
    }
})