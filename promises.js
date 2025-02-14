//promises is needed to completed today 

// function fun(istring,fn){
//     let output=istring.split(',');
//     for(let i=0; i<output.length; i++){
//    fn(output[i])
//    fn(output[i])
//    console.log(output.length);
//     }
// }

// fun("name:ayush, subject:it", function process(ip){
//     let arr=ip.split(":");
//         console.log("{",arr[0],"=>",arr[1],"}");

// });

//promises (how to create a promise) 
// (how to consume a promise)

function fetch(url,fn){
    //download content of url and it takes some time 
    //we will download and pass the result to the callback 
  url= console.log("start");
    setTimeout(function process()  {
        console.log("downloaded")
        let response="dummy data";
        fn(response);
    }, 3000);
}

// function to save the downloded data to a file and return the filename 
function writefile(data,fn){
  console.log("start write data",data)
setTimeout(function process(){
  console.log("writing complete")
  let filename="a.txt";
  fn(filename);
}, 4000);}

function upload(filename,newurl, fn){
  console.log("upload stated");
  setTimeout(function process () {
    console.log("file uploaded ",filename,"upload success",newurl);
    let uplres="success";
    fn(uplres);
    console.log("upload done");
  }, );
}
// this is what callback hell is ??
fetch("www.google.com",function download(response){
console.log(`downoaded response ${response}`)
writefile(response,function write(filename){
  console.log("new file written",filename);
  upload(filename,"www.aoao.com",function uplad(upladres) {
    console.log("success",upladres)
  })
})
});