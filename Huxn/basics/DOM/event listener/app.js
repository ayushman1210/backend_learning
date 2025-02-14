// const second=document.querySelector('.second-btn');
// second.onclick=alert("hemllo")

// const best=document.querySelector('.second-btn')

// function hello(){
//     console.log("kalyani")
// }

// best.addEventListener("click",function () {
//     console.log("hello ayushman");
    
// })

// best.addEventListener("click",hello);

// const para=document.querySelector('.para');
// para.addEventListener("click", (event)=>{
//     console.log(event);
// })

const form=document.querySelector('form');
const input=document.querySelector('input')
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     console.log(event)
// })
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(input.value);
})