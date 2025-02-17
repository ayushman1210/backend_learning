const  { Telegraf }=require('telegraf');
const axios=require('axios');

//how to get the secret token for creating a bot??
// search botfather on telegram
// to crate newbot type /newbot and enter

const url=axios.get('https://api.humorapi.com/jokes/search?api-key=9d4181311e874440833e7c620f6c2780&number=1&include-tags=dark,law,relationship')
.then((response)=>{
    console.log(JSON.stringify(response))
})
const bot= new Telegraf('7441158044:AAGIU0H4XAgoxKMySvGZnkEYnyLRPc0BPtE');
bot.start((ctx)=> ctx.reply("Hello welcome to the kalyani_bot"));
bot.command('valentine',(ctx)=>ctx.reply("ayushman stop contacting me we had already coversation about it  "));
bot.command('ayushman',(ctx)=>ctx.reply("ab randi rona mat kr wo chli gyi"))
bot.command('jairam',(ctx)=>ctx.reply("lund fakir "))
bot.command('karan',(ctx)=>ctx.reply("nhi milegi anshu tujhe "))
bot.command('krishna',(ctx)=>ctx.reply("tanisha ka ashiq "))
bot.command('kalyani',(ctx)=>ctx.reply("ayushman ko ha kr de "))
bot.command('lucky',(ctx)=>ctx.reply("dur rhe kalyani se tu "))
bot.on('sticker',(ctx)=>ctx.reply('❤️'))
bot.command('jokes',(ctx)=>ctx.reply({url}));
bot.launch();
