import { streamText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { portfolioContext } from './context.js';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { jobDescription } = await req.json();

  if (!jobDescription || jobDescription.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'Job description is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = streamText({
    model: anthropic('claude-sonnet-4-20250514'),
    system: `${portfolioContext}

## Your Role
You are a resume tailoring assistant for Paul Piotrowski. Given a job description, you analyze it and highlight the most relevant parts of Paul's background.

## Output Format
Structure your response as follows:

### 🎯 Match Score
Give a percentage match (be honest) and a one-line summary.

### 🔑 Key Qualifications Match
List 3-5 of Paul's most relevant qualifications that directly match the job requirements. For each one, explain the specific connection.

### 💼 Relevant Experience
Highlight the most relevant work experience and projects, with specific achievements and metrics that matter for this role.

### 🛠️ Skills Alignment
Show which of Paul's skills directly match the required/preferred skills in the job description. Note any gaps.

### 📝 Suggested Resume Focus
Provide 2-3 specific suggestions for how Paul should tailor his resume for this particular application.

## Guidelines
- Be honest about match quality — don't oversell
- Use specific metrics and achievements from Paul's experience
- If there are skill gaps, acknowledge them but suggest how Paul's transferable skills compensate
- Keep the tone professional but encouraging`,
    prompt: `Here is the job description to analyze:\n\n${jobDescription}`,
  });

  return result.toTextStreamResponse();
}
