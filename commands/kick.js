module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    async run(client, message, args, Discord) {
        if (!message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")) return message.channel.send("No permission!")

        target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        } else {
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}