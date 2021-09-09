module.exports = async (client) =>{
    const guild = client.guilds.cache.get("880268447412527184");
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get("881060512400568351");
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        // console.log("Updating Member Count")
    }, 5000)
}

