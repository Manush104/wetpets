export const prerender = false;

import { GoogleGenAI } from '@google/genai';

export async function POST({ request }: { request: Request }) {
  try {
    const apiKey = import.meta.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { message } = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // The model configuration and system prompt
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
        config: {
          systemInstruction: "You are Cowesh, a highly knowledgeable and friendly AI assistant for Wet Pets, a premium aquarium store in Kolkata. You know everything about ornamental fish, aquariums, aquascaping, and fish care. Your job is to answer customer questions politely and helpfully. Always introduce yourself as Cowesh if asked. Keep responses concise, engaging, and relevant to aquariums. Recommend visiting the store or contacting us for specific product availability."
        }
    });

    return new Response(JSON.stringify({ reply: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Cowesh API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
