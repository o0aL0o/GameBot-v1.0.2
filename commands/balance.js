const { contains } = require("cheerio")

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: ["SPEAK"],
    description: "Check your balance",
    execute(client, message, cmd, args, Discord, profileData) {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffa3e5")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyname: true }))
            .addFields(
                { name: "`conins: `", value: `${profileData.coins}` },
                { name: "`bank: `", value: `${profileData.bank}` }
            )
        message.channel.send({ embeds: [embed] })
    }
}
