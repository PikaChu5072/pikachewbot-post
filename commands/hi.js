module.exports = {
    name: "hi",
    async run(client, message, args, Discord) {
        let responses = ["**HALLO**", "*Hi*", "**HMM!! Hello**", "**Should i even Respond??**", "not me"];

        let result = Math.floor(Math.random() * responses.length);

        message.channel.send(responses[result])
    }
}