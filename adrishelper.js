const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Estoy listo!");
 });

 const prefix = "h!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);                     
  }    
});

 
 bot.on("message", (message) => {
   if(message.content.startsWith("h!hi")) {
     message.channel.send("hola!");
   }
 
 });

 bot.on("message", (message) => {
  if(message.content.startsWith("h!invite")) {
    message.channel.send("https://discord.com/oauth2/authorize?client_id=816478380466634763&scope=bot&permissions=2146967231");
  }

});

 bot.login(process.env.token);

 