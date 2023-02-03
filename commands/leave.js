const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Stop music and clears the queue'),
    async execute(client, interaction) {
        const player = client.manager.players.get(interaction.guild.id);

        if (!player) return interaction.reply('Whaat, I am not playing music');

        player.destroy()

        interaction.reply('Bye!')
    }
}