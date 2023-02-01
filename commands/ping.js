const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping'),
	async execute(client, interaction) {
		interaction.reply(`Ping: ${client.ws.ping}`)
	},
};