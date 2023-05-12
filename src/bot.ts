import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import { config } from "dotenv";
import ask from "./modules/ask";
import decode from "./utils/decode";
config();
let TELEGRAM_API_KEY: string;
if (process.env.DOCKER_SECRETS) {
  TELEGRAM_API_KEY = decode(process.env.TELEGRAM_API_KEY as string);
} else {
  TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY as string;
}
const bot: Telegraf<Context<Update>> = new Telegraf(TELEGRAM_API_KEY);
bot.start((ctx) => {
  ctx.reply(
    `Hi ${ctx.from.first_name}, My name is Genius Helper it's a pleasure to help you!`
  );
});
bot.command(ask.command, ask.answer);
bot.launch();
