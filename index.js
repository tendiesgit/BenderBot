const DISCORD = require("discord.js");
const TOKEN = "NzI2Nzg1MjA0NDAzOTYxOTI3.XvikgQ.Vg3IUgIw5niBat0fV7G7GYrhuMQ";
var bot = new DISCORD.Client();

// bot.on('ready', () => {          Checks if bot is online and logs to the console.
//     console.log("I'm ALIIIVE!!!");
//   });

bot.on("message", function(msg) {
  if (msg.content === "hello") {
    msg.reply("SILENCE, PUNY MORTAL!");
  }
});

bot.login(TOKEN);