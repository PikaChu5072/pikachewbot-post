const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "commands list",
    async run(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Help/Commands')
            .setDescription('This is a Help Command')
            .addFields(
                { name: 'For Moderation Commands', value: 'Type ~helpMod!'},
                { name: 'For Fun Commands!!', value: 'Type ~welp!'},
            )
            .setFooter('My PreFix Is (~) Its a tilda')
            .setTimestamp();

        message.channel.send(newEmbed);

    }
}