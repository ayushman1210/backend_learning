
function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(() => {
            let data1=" data";
            console.log("downloading started")
            reject(data1);
        }, 2000);
    })
}

async function processing(){
    try {
        let downloaddata=await fetchdata("www.google.com");
        let write=await writedata("hello");
        let uploaddata=await upload(File,"www.google.com");
        return uploaddata;
        
    } catch (error) {
        console.log(error)
    }
}

console.log("start")
processing();