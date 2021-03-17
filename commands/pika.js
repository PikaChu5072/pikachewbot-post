const Discord = require("discord.js");

module.exports = {
    name: "pika",
    async run(client, message, args, Discord) {
        let responses = ["https://tenor.com/view/excited-excited-pikachu-happy-pikachu-pokemon-gif-16771327", "https://tenor.com/view/detective-pikachu-dance-80s-pokemon-dancing-pikachu-gif-14108003", "https://tenor.com/view/pikachu-pokemon-love-happy-hearts-gif-16494752", "https://tenor.com/view/pikachu-pokemon-happy-gif-3469239", "https://tenor.com/view/pokemon-pikachu-cute-anime-gif-15522729", "https://tenor.com/view/thunderbolt-pikachu-pokemon-anime-attack-gif-17278549", "https://tenor.com/view/pika-pikachu-pokemon-gif-15189080"];

        let result = Math.floor(Math.random() * responses.length);

        message.channel.send(responses[result])
    }
}
