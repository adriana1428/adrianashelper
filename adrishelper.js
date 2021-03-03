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

 bot.on("message", (message) => {
  if(message.content.startsWith("h!invite")) {
    message.channel.send("https://discord.com/oauth2/authorize?client_id=816478380466634763&scope=bot&permissions=2146967231");
  }

});

bot.on("message", message => {
  if(message.content  === ("h!command")){
    const embed = new MessageEmbed()
    .setTitle("titulo a")
    .setDescripcion("pruebas a")
    .setColor("RANDOM")
    .setThumbnail("https://media.giphy.com/media/EXBUpzDkvLLFu/giphy.gif")
    .setFooter("ajio")
    .setTimestamp();
    message.channel.send(embed)


  }
})
 bot.login(process.env.token);

 