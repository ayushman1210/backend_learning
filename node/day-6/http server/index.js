const http=require('http');
const PORT=3000;
const server=http.createServer(function execution(request,response){
    console.log(request.method)
    if(request.url=="/home"){
    response.end("hello world")
    }
    else if(request.url=="/goa"){
        response.end("welcome to goa")
    }
    else{
        response.end("welcome to the page")
    }
});

server.listen(PORT,function process(){
    console.log("server is started port ",PORT)
});