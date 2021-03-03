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
 
const prefixModel = require("../models/prefix")

module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });

    if (!args[0]) return message.channel.send('You must provide a **new prefix**!');

    if (args[0].length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    aliases: []
}


const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const {
    loadCommands
} = require('./utils/loadCommands');
const mongoose = require('mongoose');
//Make sure to require this model in your message event or index.js if you use message event on there. in this case im going to require it here
const prefix = require('./models/prefix');

mongoose.connect('MONGODB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.login("BOT_TOKEN");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

client.on('message', async (message) => {
    if (message.author.bot) return;

    //Getting the data from the model
    const data = await prefix.findOne({
        GuildID: message.guild.id
    });

    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    //If there was a data, use the database prefix BUT if there is no data, use the default prefix which you have to set!
    if(data) {
        const prefix = data.Prefix;

        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    } else if (!data) {
        //set the default prefix here
        const prefix = "h!";
        
        if (!message.content.startsWith(prefix)) return;
        const commandfile = client.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(client, message, args);
    }
})

 bot.login(process.env.token);

 