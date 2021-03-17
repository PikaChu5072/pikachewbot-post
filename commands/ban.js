module.exports = {
    name: 'ban',
    description: "This command Bans a member!",
    async run(client, message, args, Discord) {
        if (!message.member.hasPermission("BAN_MEMBERS", "ADMINISTRATOR")) return message.channel.send("No permission!")
        target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send(`You coudn't Ban that member are you sure you have enough power??`);
        }
    }
}