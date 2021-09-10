module.exports = {
    name: "help",
    aliases: ["hl"],
    cooldown: 7200,
    permissions: ["SPEAK"],
    description: "help command",
    async execute(client, message, cmd, args, Discord, profileData) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor("#ffa3e5")
            .setTitle("Help command")
            .setDescription("this show all commands for the bot. PREFIX is `g.`")
            .addFields(
                { name: "`g.balance`", value: "Check your balance" },
                { name: "`g.dailycoins`", value: "Get your daily reward" }
            )
            .setFooter("bot powered by aL");

        message.channel.send({ embeds: [helpEmbed] });
    }
}