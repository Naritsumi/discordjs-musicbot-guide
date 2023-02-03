# Discordjs v14 Musicbot Guide
Simple discord music bot

## Pre-requisite software

Depending on the operating system you're running the installation will be slightly different.

* nodejs \(Version 16.6 and higher required, see [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/package-manager/)\)

* erelajs ([Website](https://www.npmjs.com/package/erela.js) / `npm i erela.js`)

Once you have this all installed, create a folder for your project and install discord.js:

* discordjs ([Website](https://discord.js.org/#/) / `npm install discord.j`)

## Create App and Bot Account

* Go to the [Discord.com Application Page](https://discord.com/developers/applications/me)
* Create a **New Application**, and give it a name
* Click **Bot**, **Add Bot** then finally click **Yes, do it**
* Visit `https://discord.com/oauth2/authorize?client_id=APP_ID&scope=bot` , replacing **APP\_ID** with the **Application ID** from the app page, to add the bot to your server \(or ask a server admin to do it for you\). If you're wanting slash commands as well, add `%20applications.commands` to the end of the URL above.
* Copy your bot's **Secret Token** and keep it for later

## Launching the bot

In your command prompt, from inside the folder where `index.js` is located, launch it with:

`node index.js`

## Resources

* [Discord.js Documentation](http://discord.js.org).
* [Erela.js Documentation](https://erelajs-docs.netlify.app/).
* [Cool Zone]https://www.youtube.com/@CoolZone123).
* [Discord.js Official Server](https://discord.gg/bRCvFy9): The official server has a number of competent people to help you, and the development team is there too!
