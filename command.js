const { Message } = require("discord.js");

module.exports = {
    name: 'command',
    Description: 'Embeds!',
    execute(messagge, args, Discord){
        const newEmbed = new Discord.MessaggeEmbed()
        .setColor('#ffdce9')
        .setTittle('Prueba de Embed/insercion')
        .setURL('https://www.color-hex.com/color/ffdce9')
        .setDescription('solo una pequeña prueba sobre las inserciones')
        .addFields(
            {name: 'Titulo 1', value: 'se buen@'},
            {name: 'Titulo 2', value: 'se original'},
            {name: 'Titulo 3', value: 'se tu'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg')
        .setFooter('nadie lee esto');

        messagge.channel.send(newEmbed);
    }
    
}