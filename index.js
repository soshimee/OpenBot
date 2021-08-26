const fs = require("fs");
const config = require("./config.json");
const secret = require("./secret.json");
const discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const rest = new REST({ version: "9" }).setToken(secret.token);
const { SlashCommandBuilder } = require('@discordjs/builders');
const client = new discord.Client({ intents: [ discord.Intents.FLAGS.GUILDS ] });
const token = secret.token;

let commands = {};

fs.readdirSync("commands").forEach(file => commands[file.split(".")[0]] = (require(`./commands/${file}`)));

for (const commandName in commands) {
	// Out of order
}

// client.on("interaction");