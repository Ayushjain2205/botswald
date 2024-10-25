export const apiCode = `const callChatApi = async (question, apiKey) => {
  try {
    const response = await fetch('https://botsies.vercel.app/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${apiKey}\`,
      },
      body: JSON.stringify({ question }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API response:', data);
    } else {
      console.error('API request failed:', response.statusText);
    }
  } catch (error) {
    console.error('API request failed:', error);
  }
};

// Usage example:
const question = 'How does the Notion API work?';
const apiKey = 'YOUR_API_KEY';

callChatApi(question, apiKey);
`;
