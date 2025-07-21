import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("api : ", genAI)
    if(genAI.apiKey.length === 0){
      console.log("no api key")
    }
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // const systemInstruction = 'You are a helpful AI assistant for a startup website. Provide concise, friendly, and accurate responses to user queries.';

    // Start a chat session
    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
      // systemInstruction,
    });

    // Send user message and get response
    const result = await chat.sendMessage(message);
    const reply = result.response.text();

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return new Response(JSON.stringify({ reply: 'Sorry, something went wrong. Try again!' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}