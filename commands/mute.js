module.exports = {
    name: "mute",
    aliases: ['shup'],
    description: "Mute a member from your server",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) return message.channel.send("No permission!")
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) message.channel.send("This user poofed");
        if(user.id === message.author.id) return message.channel.send("You cannot mute yourself nub");
        let role = message.guild.roles.cache.find(x => x.name === "Muted");
        if(!role) return message.channel.send("Are ya Sure The Muted role exsist");
        let reason = args.slice(1).join(" ");
        if(reason === null) reason = "Unspecified"
        user.roles.add(role);
        await message.channel.send(`${user} has been muted for that reason: ${reason}`)
        user.send(`Hello there. You have been muted from ${message.guild.name} for the following reason: ${reason}`);
    }
}