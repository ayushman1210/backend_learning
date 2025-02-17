import {readFile,writeFile} from 'fs/promises';
const filepath=new URL('./index.html',import.meta.url);
let data=await readFile(filepath,{encoding:"utf-8"});
console.log(data);

const obj={
    title:"my title",
    body:"my body"
}
for(const[key,value] of Object.entries(obj)){
    data=data.replace(`{${key}}`,value)
}

await writeFile(new URL('./index.html',import.meta.url),data);