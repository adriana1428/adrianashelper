const Discord = require("discord.js");
const bot = new Discord.Client();
const { Client, MessageEmbed  } = require("discord.js");
const bot = new Client();

bot.on("ready", () => {
    console.log("Estoy listo!");
 });

 const prefix = "h!";

bot.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! este mensaje tubo una latencia de ${timeTaken}ms.`);                     
  }
  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`El total de la suma de estos números es ${sum}!`);
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

bot.on("message", message =>{
   if(message.content === (prefix +"embed")){
     const embed = new  MessageEmbed()
     .setTitle("titulo")
     .serAuthor(message.member.displayName, message.author.displayAvatarURL());
     message.channel.send(embed)
   }
  });
 bot.login(process.env.token);
