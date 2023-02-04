import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export function OpenAi(msg: string): Promise<string | undefined> {
    return new Promise((resolve) => {
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: msg,
            temperature: 0.2,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
        }).then((msg) => {
            resolve(msg.data.choices[0]!.text)
        });
    })

}