import { OpenAi } from './../lib/openai';
const command: string = "/ask";
const answer: (ctx: any) => void = (ctx: any) => {
    const { message } = ctx;
    const text = message.text.replace(command, "");
    if (text == "") {
        ctx.reply("message cannot be empty!")
    } else {
        OpenAi(text).then((resp) => { ctx.reply(resp) });
    }
}
export default { command, answer }