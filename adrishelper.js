const { Client, MessageEmbed  } = require("discord.js");
const client = new Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });

 const prefix = "h!";

client.on("message", function(message) {
  if (message.author.client) return;
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
 
 client.on("message", (message) => {
   if(message.content.startsWith("h!hi")) {
     message.channel.send("hola!");
   }

 });

 client.on("message", (message) => {
  if(message.content.startsWith("h!invite")) {
    message.channel.send("https://discord.com/oauth2/authorize?client_id=816478380466634763&scope=bot&permissions=2146967231");
  }
});

client.on("message", message => {
   if(message.content === (prefix + "help")){
     const embed = new  MessageEmbed()
     .setTitle("Comandos de Adri's Helper")
     .setAuthor(message.member.displayName, message.author.displayAvatarURL())
     .setColor(0xbe68fb)
     .setThumbnail("https://i.imgur.com/rFmrJQt.png");
     message.channel.send(embed)
   }
  });

 client.login(process.env.token);
