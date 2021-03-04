const Discord = require("discord.js");
const bot = new Discord.Client();

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

if (message.content.startsWith(prefix +"embed" )){
  const embed = new Discord.RichEmbed() 
  .setTitle("Este es su título, puede contener 256 caracteres")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0x00AE86)
  .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
  .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
  .setImage(message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://github.com/CraterMaik")
  .addField("Este es un título de campo, puede contener 256 caracteres",
    "Este es un valor de campo, puede contener 2048 caracteres.")
  .addField("Campo en línea", "Debajo del campo en línea", true)
  .addBlankField(true)
  .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
  
  message.channel.send({embed});
}

 bot.login(process.env.token);
