const axios=require('axios');
// async function fetch(){
// const response=await axios.get('http://www.omdbapi.com/?t=matrix&apikey=e288e7e3')
// console.log(response);
// }

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e288e7e3')
.then((response)=>{
    console.log(response)
})
// fetch();