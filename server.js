const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.post('/api/chat', async (req, res) => {
  try {
    console.log('Received request at /api/chat');
    const { message } = req.body;

    if (!message) {
      console.log('No message provided in request body');
      return res.status(400).json({ reply: 'No message provided!' });
    }
    console.log('Message received:', message);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log('GoogleGenerativeAI initialized, API Key length:', process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.length : 0);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    console.log('Model initialized:', model);

    // const systemInstruction = 'You are a helpful AI assistant for a startup website. Provide concise, friendly, and accurate responses to user queries.';

    const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });
    console.log('Chat session started');

    const result = await chat.sendMessage(message); // This might need adjustment
    console.log('API response received');
    const reply = result.response.text();

    console.log('Response text:', reply);
    res.json({ reply });
  } catch (error) {
    console.error('Error with Gemini API:', error);
    res.status(500).json({ reply: 'Sorry, something went wrong. Try again!' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});