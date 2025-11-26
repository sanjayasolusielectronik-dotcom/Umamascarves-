import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePostContent = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, engaging social media post about: ${topic}. 
      Keep it under 280 characters. Use emojis. Make it sound casual and fun like a Facebook post.`,
    });
    
    return response.text || "";
  } catch (error) {
    console.error("Error generating post content:", error);
    throw error;
  }
};