import { aiModel } from './gemini'
import { geminiInternal } from '../adapters/gemini';


const context: any[] = [];

export const aiChat = async (prompt: string) => {
    
    const input = {
        role: "user",
        parts:[
            {
                text: prompt
            },
        ],
    };

    context.push(input);
    
    const data = await aiModel(context);

    const { response } = geminiInternal(data);


    const output = {
        role: "model",
        parts:[
            {
                text: response,
            },
        ],
    };

    context.push(output);
    
     return {
        response,
        context,
     };
};