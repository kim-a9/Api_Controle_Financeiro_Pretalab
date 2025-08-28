import { GoogleGenAI } from "@google/genai"

export const geminiInternal = (data: any) => {
    return {
        response: data.candidates[0].content.parts[0].text,
    };
};