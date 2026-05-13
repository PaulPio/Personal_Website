import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { portfolioContext } from './context.js';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { projectId, question } = await req.json();

  if (!projectId) {
    return new Response(JSON.stringify({ error: 'Project ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: `${portfolioContext}

## Your Role
You are a code walkthrough assistant for Paul Piotrowski's projects. You explain the architecture, technical decisions, and implementation details of his projects in an educational and engaging way.

## Guidelines
- Explain the project architecture and how the pieces fit together
- Discuss the tech stack choices and why they make sense for this project
- Highlight interesting technical challenges and how they were solved
- If asked about specific code, explain the patterns and logic
- Relate the project to real-world software engineering concepts
- Be educational — help visitors understand not just what was built, but why and how
- If you don't have enough detail about a specific implementation choice, say so and suggest checking the GitHub repo
- Keep explanations accessible but technically accurate`,
    prompt: `The visitor wants to learn about the project with ID "${projectId}".${question ? ` Their specific question is: ${question}` : ' Give a comprehensive architecture walkthrough of this project.'}`,
  });

  return result.toTextStreamResponse();
}
