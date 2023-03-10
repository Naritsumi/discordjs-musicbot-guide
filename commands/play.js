const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play music!')
        .addStringOption(option =>
            option.setName('song_name')
                .setDescription('Song name!')
                .setRequired(true)),
    async execute(client, interaction) {
        const song_name = interaction.options.getString('song_name');

        if (!interaction.member.voice.channel)
            return interaction.reply({ content: "You must join a voice channel first", ephemeral: true })

        let player = client.manager.players.get(interaction.guild.id);

        if (!player) player = client.manager.create({
            guild: interaction.guild.id,
            voiceChannel: interaction.member.voice.channel.id,
            textChannel: interaction.channel.id,
        })

        const songs = await client.manager.search(song_name);

        if (!player.playing && !player.paused && !player.queue.size) player.connect();
        player.queue.add(songs.tracks[0])

        if (!player.playing && !player.paused && !player.queue.size) player.play();
        
        //interaction.reply(`Playing ${songs.tracks[0].title}`);  
        interaction.reply(`Enqueuing ${songs.tracks[0].title}.`);
    }
}