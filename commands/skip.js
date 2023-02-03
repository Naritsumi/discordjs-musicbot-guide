const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skip current song'),
    async execute(client, interaction) {
        const player = client.manager.players.get(interaction.guild.id);

        if (!player) return interaction.reply('I am not playing music!');

        //if (!player.playing) return interaction.reply('I am already paused!');

        player.stop();

        interaction.reply('Playing next song')
    }
}