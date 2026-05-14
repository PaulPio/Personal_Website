import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { portfolioContext } from './context.js';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { messages } = body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: 'messages must be a non-empty array' }, { status: 400 });
  }

  const sanitizedMessages = messages
    .filter((message) => message && typeof message === 'object')
    .map((message) => ({
      role: message.role,
      content: message.content,
    }))
    .filter((message) => ['user', 'assistant'].includes(message.role) && typeof message.content === 'string' && message.content.trim().length > 0);

  if (sanitizedMessages.length === 0) {
    return Response.json({ error: 'messages must contain valid user/assistant text messages' }, { status: 400 });
  }

  const result = streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: `${portfolioContext}

## Your Role
You are "Ask Paul AI", a friendly and knowledgeable assistant embedded on Paul's portfolio website. You help visitors learn about Paul's background, skills, projects, and experience.

## Guidelines
- Be conversational, warm, and professional
- Answer questions about Paul's projects, skills, experience, education, and availability
- If asked about something not in Paul's portfolio data, say you don't have that information and suggest contacting Paul directly at paulrpiotrowski@gmail.com
- Keep responses concise but informative (2-4 paragraphs max)
- Use markdown formatting for better readability
- If asked "what can you do?", explain you can answer questions about Paul's background, projects, skills, and experience, and walk through his project code
- You can respond in English, Spanish, or Portuguese based on the visitor's language`,
    messages: sanitizedMessages,
  });

  return result.toTextStreamResponse();
}
