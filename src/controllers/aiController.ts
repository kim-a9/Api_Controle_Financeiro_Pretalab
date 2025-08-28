import { Request, Response } from "express";
import { ai, aiPromptData } from "../service/prompt";

export const aiChat = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await ai(prompt);

  res.json(response);
};

export const aiResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  const response = await aiPromptData(prompt);

  res.json(response);
};

