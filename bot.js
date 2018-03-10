const botSettings = require("./botsettings.json");
const Commando = require("discord.js-commando");
const bot = new Commando.Client({
    owner: "351094569309306891",
    commandPrefix: "!",
    disableEveryone: true
});
const path = require("path");
bot.signUps = 0;  // signup counter

bot.registry
    // Registers your custom command groups
    .registerGroups([
        ['raid', 'Raid commands'],
        ['social', 'Social commands']
        //['other', 'Some other group']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

bot.on("ready", () => {
    console.log(`Raid Manager is online. ${bot.user.username}`);
    bot.user.setActivity("Raiding")
});

bot.login(botSettings.token);