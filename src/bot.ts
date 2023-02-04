import { Telegraf, Context } from 'telegraf';
import { Update } from 'typegram';
import { config } from "dotenv";
import ask from "./modules/ask"
config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.TELEGRAM_API_KEY as string);
bot.start((ctx) => {
  ctx.reply(`Hi ${ctx.from.first_name}, My name is Genius Helper it's a pleasure to help you!`)
});
bot.command(ask.command, ask.answer);
bot.launch();