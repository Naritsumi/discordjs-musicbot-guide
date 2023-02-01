# easy-discord-music-bot
Simple discord music bot

## Create App and Bot Account

* Go to the [Discord.com Application Page](https://discord.com/developers/applications/me)
* Create a **New Application**, and give it a name
* Click **Bot**, **Add Bot** then finally click **Yes, do it**
* Visit `https://discord.com/oauth2/authorize?client_id=APP_ID&scope=bot` , replacing **APP\_ID** with the **Application ID** from the app page, to add the bot to your server \(or ask a server admin to do it for you\). If you're wanting slash commands as well, add `%20applications.commands` to the end of the URL above.
* Copy your bot's **Secret Token** and keep it for later

## Pre-requisite software

Depending on the operating system you're running the installation will be slightly different.

* nodejs \(Version 16.6 and higher required, see [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/package-manager/)\)

* erelajs [Website](https://www.npmjs.com/package/erela.js)
`npm i erela.js`

Once you have this all installed, create a folder for your project and install discord.js:

* discordjs [Website](https://discord.js.org/#/)
`npm install discord.j`

https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

## Launching the bot

In your command prompt, from inside the folder where `index.js` is located, launch it with:

`node index.js`

IN CONSTRUCTION....

Credits: Cool Zone