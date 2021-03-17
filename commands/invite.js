module.exports = {
    name: "invite",
    async run(client, message, args, Discord) {
        const inviteEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Ivite Link For PikaBot')
            .addFields(
                { name: 'PikaBot Link', value: 'https://discord.com/api/oauth2/authorize?client_id=812354092059197491&permissions=8&scope=bot' },

            )
        message.channel.send(inviteEmbed);


    }
}