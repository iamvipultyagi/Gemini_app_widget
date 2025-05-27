const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const API_KEY = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY;

export const sendMessageToGemini = async (userMessage) => {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: userMessage }] }]
      }),
    });

    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

    const data = await response.json();
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    return textResponse;

  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};