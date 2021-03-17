const ms = require("ms");

module.exports = {
    name: 'tmute',
    description: "mute",
    async run(client, message, args, Discord) {
        if (!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) return message.channel.send("No permission!")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!user) return message.channel.send('Invalid User Provided!');
        if(!user === message.author.id) return message.channel.send("You cannot mute yourself nub");
        let muteTime = args[1];
        if (!muteTime) return message.channel.send("No time provided!");
        let msTime = ms(muteTime);
        let muteRole = message.guild.roles.cache.find(r => r.name == "Muted");
        if (!muteRole) return message.channel.send("Mute role not found!");
        user.roles.add(muteRole);
        message.channel.send("User has been muted!");

        setTimeout(() => {
            user.roles.remove(muteRole);
            message.channel.send("User has been unmuted!")
        }, msTime)


    }
}