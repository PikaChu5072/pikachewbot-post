const Discord = require('discord.js');
module.exports = {
    name: 'welp',
    description: " Commands",
    async run(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Help/Commands For Miscellaneous')
            .setDescription('This is a Help Command')
            .addFields(
                { name: 'Meme', value: 'type: ~meme' },
                { name: 'ping', value: 'type: ~ping' },
                { name: 'trigger', value: 'type: ~trigger' },
                { name: 'say', value: 'type: ~say <channel> <anything you want goes here>' },
                { name: 'avatar', value: 'type: ~avatar' },
                { name: 'Jumple', value: 'Unscramble The word type: ~jumple' },                
                { name: 'majek', value: 'Does Majek to the Text: ~majek' },                
                { name: 'math', value: 'Does Math: ~math' },                
                { name: 'covid', value: 'Gived amount of covid cases:~covid <country>' },                
                { name: 'RPS', value: 'Plays  a game of Rock,Paper,Scisors' },
                { name: 'reverse', value: 'flips your text: ~flip/reverse <text>' },                
                { name: 'suggest', value: 'Sends a suggestion: ~suggest' },
                { name: 'whois', value: 'Gives info about a user ~whois <user>' },
                { name: 'server', value: 'Gives info about the server ~server' },   
                { name: 'weather', value: 'Gives Weather States ~weather <country>' },                
            )
            .setFooter('Hallo')
            .setTimestamp();

        message.channel.send(newEmbed);

    }
}






//{ name: '', value: '' },