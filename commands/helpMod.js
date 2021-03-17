const Discord = require('discord.js');
module.exports = {
    name: 'mhelp',
    description: "Mods Commands",
    async run(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Help/Commands For Server Mods')
            .setDescription('This is a Help Command')
            .addFields(
                { name: '(Clear) clears a number of messages', value: 'Type: ~clear <Number>!' },
                { name: '(Ban) Bans a Member from the server', value: 'Type:  ~ban <user>!' },
                { name: '(cancel) its baisacly the Ban command', value: 'Type: ~cancel <user>!' },
                { name: '(Mute/shup) Mutes a member ', value: 'Type: ~mute <user>!' },
                { name: '(UnMute) Unmutes a member', value: 'Type: ~unmute <user>!' },
                { name: '(TempMute) Mutes a member for a specific time', value: 'Type: ~tmute <user> <time>!' },
                { name: '(Kick) kicks a user', value: 'Type: ~kick <user>!' },
            )
            .setFooter('My PreFix Is (~)')
            .setTimestamp();

        message.channel.send(newEmbed);

    }
}