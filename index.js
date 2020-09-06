const Discord = require("discord.js");
const bot = new Discord.Client();
require("dotenv").config();
bot.login(process.env.BOT_TOKEN);
bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on("message", async msg => {
    if (msg.author.bot) return;
    //console.log(msg.content);
    if (msg.content.slice(msg.content.indexOf(":"), msg.content.lastIndexOf(":")+1) === `:homosex_gif:` || msg.content.slice(msg.content.indexOf(":"), msg.content.lastIndexOf(":")+1) === `:homosex:`) {
        console.log(`H O M O   S E X   A C T I V A T E D`)
        if (msg.member.voice.channel) {
            const vc_connection = await msg.member.voice.channel.join();
            const dispatcher = vc_connection.play("homosex.mp3");
            dispatcher.on("finish", () => {
                vc_connection.disconnect();
            });
        } else {
            msg.channel.send(`<a:homosex_gif:751268854067495056>`);
        };
    };
});