## UNDER CONSTRUCTION

## Step 1: Creating your App and Bot account

The first step in creating a bot is to create your own Discord _application_. The bot will use the Discord API, which requires the creation of an account for authentication purposes. Don't worry though, it's super simple.

* Go to the [Discord.com Application Page](https://discord.com/developers/applications/me)
* Create a **New Application**, and give it a name
* Click **Bot**, **Add Bot** then finally click **Yes, do it**
* Visit `https://discord.com/oauth2/authorize?client_id=APP_ID&scope=bot` , replacing **APP\_ID** with the **Application ID** from the app page, to add the bot to your server \(or ask a server admin to do it for you\). If you're wanting slash commands as well, add `%20applications.commands` to the end of the URL above.
* Copy your bot's **Secret Token** and keep it for later

