const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resumes music'),
    async execute(client, interaction) {
        const player = client.manager.players.get(interaction.guild.id);

        if (!player) return interaction.reply('I am not playing music!');

        if (player.playing) return interaction.reply('I am already playing music!');

        player.pause(false)

        interaction.reply('Music is resumed')
    }
}