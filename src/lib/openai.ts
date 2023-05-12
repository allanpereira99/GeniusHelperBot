import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
import decode from "../utils/decode";
config();
let OPENAI_API_KEY: string;
if (process.env.DOCKER_SECRETS) {
  OPENAI_API_KEY = decode(process.env.OPENAI_API_KEY as string);
} else {
  OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
}
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export function OpenAi(msg: string): Promise<string | undefined> {
  return new Promise((resolve) => {
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: msg,
        temperature: 0.2,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
      })
      .then((msg) => {
        resolve(msg.data.choices[0]!.text);
      });
  });
}
