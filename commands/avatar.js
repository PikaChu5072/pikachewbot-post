module.exports = {
    name: 'avatar',
    permissions: [],
    aliases: ["a", "pfp"],
    description: 'Return a user(s) avatar picture!',
    async run(client, message, args, Discord) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
        
        const embed = new Discord.MessageEmbed()
           .setTitle(mentionedMember.user.tag + "'s Avatar!")
           .setImage(mentionedMember.user.displayAvatarURL());
           
        message.channel.send(embed);
    }
}