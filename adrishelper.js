/////////////////CONSTANTES (NO MOVER)////////////////

const Discord = require("discord.js");
const bot = new Discord.Client();
//////constante//////

const config = require ("./config.json")

//////////ESTADO//////////

bot.on("ready", function() {
    console.log("I'm ready!");
 });
 
 let prefix = config.prefix;
 bot.on("message", (message) => {
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
  if(commmand === "hola"){
    message.channel.send("hola, que tal")
  }
 });
 
 bot.login(process.env.token)