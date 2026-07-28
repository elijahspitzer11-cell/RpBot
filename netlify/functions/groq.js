import Groq from "groq-sdk";

export async function handler(event, context) {
  const { prompt } = JSON.parse(event.body);

  const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
  });

  const response = await client.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [{ role: "user", content: prompt }]
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      reply: response.choices[0].message.content
    })
  };
}