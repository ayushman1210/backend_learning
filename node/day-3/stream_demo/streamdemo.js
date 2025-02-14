const fs=require('fs');
const transformstream=require('stream')
let fileStream=fs.createReadStream(__dirname+'/input.txt');
let outputstream=process.stdout;


// ReadStream.pipe(writestream)

let middlestream=new transformstream.Transform({
    transform(chunk,encoding,nextcb){
        let modifiedchunk=chunk.toString().toUpperCase();
        this.push(modifiedchunk);
        setTimeout(() => {
            nextcb();
        }, 1000);
    }
})
let newreadstream=fileStream.pipe(middlestream)
newreadstream.pipe(outputstream)
// fileStream.pipe(outputstream);