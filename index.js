const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { REST, Routes } = require('discord.js');
const { Manager } = require("erela.js");
const config = require('./config.json');
const fs = require('node:fs');
//const path = require('node:path');

const client = new Client({ 
	intents: [GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildVoiceStates, 
		GatewayIntentBits.GuildMembers] 
});

client.commands = new Collection();

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);    
	client.commands.set(command.data.name, command);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(config.token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(config.clientId, config.guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.once("ready", () => {
	client.manager.init(client.user.id);
	console.log('Ready!');
});

client.on("interactionCreate", (interaction) => {
	if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)
    if (!command) return;

	try {
        command.execute(client,interaction)
	} catch (error) {		
		interaction.reply({content:"There was an error executing this command.", ephemeral:true})
	}
});

// Erela.js -> music manager
// Define some options for the node
const nodes = [
    // If you pass a object like so the "host" property is required
    {
      host: "localhost", // Optional if Lavalink is local
      port: 2333, // Optional if Lavalink is set to default
      password: "youshallnotpass", // Optional if Lavalink is set to default
    },
  ];

// Assign Manager to the client variable
client.manager = new Manager({
	// The nodes to connect to, optional if using default lavalink options
	nodes,
	// Method to send voice data to Discord
	send: (id, payload) => {
	  const guild = client.guilds.cache.get(id);
	  // NOTE: FOR ERIS YOU NEED JSON.stringify() THE PAYLOAD
	  if (guild) guild.shard.send(payload);
	}
  });

  // Emitted whenever a node connects
client.manager.on("nodeConnect", node => {
    console.log(`Node "${node.options.identifier}" connected.`)
})

// Emitted whenever a node encountered an error
client.manager.on("nodeError", (node, error) => {
    console.log(`Node "${node.options.identifier}" encountered an error: ${error.message}.`)
})

// THIS IS REQUIRED. Send raw events to Erela.js
client.on("raw", d => client.manager.updateVoiceState(d));


client.login(config.token);