import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateFantasyLandscape(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '16:9'
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
        const image = response.generatedImages[0];
        if (image.image && image.image.imageBytes) {
            return image.image.imageBytes;
        }
    }
    throw new Error("No image data received from the API.");

  } catch (error) {
    console.error("Error generating image with Gemini:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}