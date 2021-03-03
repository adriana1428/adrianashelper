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
    message.channel.send(const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('a title')
	.setURL('https://www.youtube.com/watch?v=1mOzaNFM6Jw&ab_channel=Megumianimations')
	.setAuthor('adriana')
	.setDescription('adriana added a description')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed););
  }

});
bot.on("message", (message) => {
   if(message.content.startsWith("h!hi")) {
     message.channel.send("Hola");
   }
 
 });
 
 bot.login(process.env.token);