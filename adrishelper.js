const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I'm ready!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("h!")) {
     message.channel.send("Hola");
   }
 
 });
 
 client.login(process.env.token);