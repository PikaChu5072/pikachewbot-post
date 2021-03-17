const fetch = require("node-fetch")
const Discord = require("discord.js")
//const link = 'https://meme-api.herokuapp.com/gimme'


module.exports = {
    name:'meme',
    permissions: [],
    description: "meme",
    async run(client, message, args, Discord){
        fetch('https://meme-api.herokuapp.com/gimme')
           .then(res => res.json())
           .then(async json => {
               const memeEmbed = new Discord.MessageEmbed()
                  .setTitle(json.title)
                  .setImage(json.url)
                  .setFooter(`Enjoy Your MEME! bot by:PikaChu#5072`);
                  
                let msg = await message.channel.send('Getting you a meme...');
                msg.edit(memeEmbed);
           })
    }
}