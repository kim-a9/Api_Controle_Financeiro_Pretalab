
import { geminiInternal } from "../adapters/gemini";
import { generateText, aiModel, financialAssistant } from "./gemini";
// import { transactions } from "../data";

const context: any[] = [];

const chatItem = (role: string, text: string ) => {
  const input = {role,
    parts: 
    [ 
      {
        text,
      },
    ],
  }
    context.push(input);
};



export const ai = async (prompt: string) => {
  const chat = await generateText(prompt);
  const res = geminiInternal(chat);

  return res;
}

export const aiPromptData = async (prompt: string) => {
    chatItem("user", prompt);

    const data = await financialAssistant(context);
    const {response} = geminiInternal(data);

    const userReq = {
      role: "user",
      text: prompt,
      timestamp: new Date(),
    }
    const modelRes ={ 
      role: "model",
      text: response,
      timestamp: new Date(),
    }

    chatItem("model", response);


    return {
        response, 
        context: context,
    };
};

