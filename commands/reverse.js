module.exports = {
    name: "reverse",
    aliases: ['flip'],
    description: "Reverses the given text",
    async run(client, message, args) {
        const text = args.join(" ")
        if(!text) return message.reply("Please give something to reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}