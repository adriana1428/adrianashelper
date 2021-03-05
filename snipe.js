const { Client, MessageEmbed, Discord } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const msg = client.snipes.get(meessage.channel.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.member.user.displayAvatarURL())
    .setDescription(msg.content)
    .setFooter('Sap@ :smirk;')
    .setTimestamp();
    message.channel.send(embed)

}
module.exports.config ={
    name: "snipe",
    aliases: []
}