const { Client, MessageEmbed, Discord } = require("discord.js");
const client = new Client();

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "| Suscribete a Adriana's Universe |   | Prefijo: h! | Ayuda: h!help |",
      type: "PLAYING"
    }
  })
}

client.on("ready", () => {
    console.log("Estoy lista!");
    presence();
 });

 const prefix = "h!";

client.on("message", function(message) {
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
 
 client.on("message", (message) => {
   if(message.content.startsWith(prefix + "hi")) {
     message.channel.send("hola!");
   }

 });

 client.on("message", (message) => {
  if(message.content === (prefix + "invite")){
    const embed = new  MessageEmbed()
    .setTitle(":sparkling_heart:  Link de Invitación")
    .setColor(0xbe68fb)
    .setThumbnail("https://i.imgur.com/rFmrJQt.png")
    .setDescription("Con este link podrás invitar a **Adri's Helper** a los servidores que administres.")
    .setURL('https://discord.com/oauth2/authorize?client_id=816478380466634763&scope=bot&permissions=2146967231')
    .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
    .setTimestamp()
    .setImage('https://media.giphy.com/media/BS0d0FHVdrmeI/giphy.gif');
    message.channel.send(embed)
  }
});

client.on("message", message => {
   if(message.content === (prefix + "help")){
     const embed = new  MessageEmbed()
     .setTitle("Comandos de Adri's Helper")
     .setAuthor(message.member.displayName, message.author.displayAvatarURL())
     .setColor("RANDOM")
     .setThumbnail("https://i.imgur.com/rFmrJQt.png")
     .setDescription("**- h!hi** ➤ Adri's Helper saluda \n\n**- h!invite** ➤ Invitación del Bot para que entre a tu server \n\n**- h!sum (Dígitos a sumar)** ➤ Se suman los dígitos colocados \n\n**- h!ping** ➤ Se revela el ping del mensaje \n\n**- h!help** ➤ Despliega el menú de comandos del bot \n\n- **h!snipe** ➤ Revela mensajes borrados")
     .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
     .setTimestamp();
     message.channel.send(embed)
   }
  });

  client.snipes = new Map()

  client.on('messageDelete', function(message, channel){
    client.snipes.set(message.channel.id, {
      content: message.content,
      author: message.author,
      image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
  })
 client.on('message', message =>{
   let args = message.content.substring(prefix.length).split(" ")

   if(message.content.startsWith(prefix + "snipe")) {

     const msg  = client.snipes.get(message.channel.id);
     if (!msg) return message.channel.send(":x: There's nothing to snipe")

     const SnipeEmbed = new MessageEmbed()
       .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
       .setDescription(msg.content)
       .setColor("RANDOM")
       .setImage(msg.image)

       message.channel.send(SnipeEmbed)
   }
 })
 client.login(process.env.token);
