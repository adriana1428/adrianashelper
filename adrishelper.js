const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    console.log("I'm ready!");
 });
 
 bot.on("message", (message) => {
   if(message.content.startsWith("h!")) {
     message.channel.send("Hola");
   }
 
 });
 
 bot.login(process.env.token);