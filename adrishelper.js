const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    console.log("I'm ready!");
 });
 
 bot.on("message", (message) => {
   if(message.content.startsWith("h!present")) {
     message.channel.send("Hola, soy la ayudante de Adriana");
   }
 
 });
 bot.on("message", (message) => {
  if(message.content.startsWith("h!help")) {
    message.channel.send("Adriana sabe, yo solo la ayudo");
  }

});
bot.on("message", (message) => {
   if(message.content.startsWith("h!hi")) {
     message.channel.send("Hola");
   }
 
 });
 
 bot.login(process.env.token);