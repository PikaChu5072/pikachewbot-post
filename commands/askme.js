module.exports = {
    name: "q",
    aliases: ["is", "are"],
    async run(client, message, args, Discord) {
        let responses = ["wdym", "no", "go ask google", "yeS", "IDK", "PIKA DANCE"];

        let result = Math.floor(Math.random() * responses.length);

        message.channel.send(responses[result])
    }
}