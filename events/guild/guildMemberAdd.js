// const profileModel = require('../../models/profileSchema');

module.exports = async (client, Discord, guildMember) =>{

    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name ==="member");

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get("880803316379045949").send(`Welcome <@${guildMember.user.id}> to come to our server`);

    let profile = await profileModel.create({
        userID: guildMember.id,
        serverID: guildMember.guild.id,
        coins: 1000,
        bank: 0,
    });
    profile.save();

}
