const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

require("dotenv").config();

const bot = new Telegraf("YOUR_TGBOT_KEY");

try {
  bot.start((ctx) => ctx.reply("Welcome click /help for commands"));

  bot.help((ctx) => ctx.reply("Commands are : /about,/hobbies"));
  bot.command("about", (ctx) => ctx.reply("nothing about to show"));
  bot.command("hobbies", (ctx) => ctx.reply("sleeping"));
  bot.on(message("sticker"), (ctx) => ctx.reply(" ❤️️ "));

  bot.launch();
} catch (err) {
  console.log(err);
}
