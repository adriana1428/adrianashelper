const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 bot.on("message", (message) => {
   if(message.content.startsWith("h!hi")) {
     message.channel.send("hola!");
   }
 
 });
 
 bot.login(process.env.token);