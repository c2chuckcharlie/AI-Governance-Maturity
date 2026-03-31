import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateStrategicReport(data: any, lang: 'en' | 'zh' | 'ja', universityName?: string) {
  const model = "gemini-3-flash-preview";
  
  const institution = universityName || (lang === 'zh' ? '貴校' : lang === 'ja' ? '貴学' : 'Your Institution');
  
  const langName = {
    zh: 'Traditional Chinese (繁體中文)',
    en: 'English',
    ja: 'Japanese (日本語)'
  }[lang];

  const prompt = `
    You are a Senior AI Governance Consultant specializing in Higher Education.
    Generate a comprehensive strategic report for ${institution} based on the following assessment data.
    
    Language: ${langName}
    
    User Profile:
    - Role: ${data.profile.role}
    - Focus: ${data.profile.focus}
    - Self-Assessed Maturity: ${data.profile.selfMaturity}/5
    
    Pillar Scores (out of 5):
    - Strategy & Leadership: ${data.scores[0].toFixed(2)}
    - Cross-Unit Collaboration: ${data.scores[1].toFixed(2)}
    - Resources & Infrastructure: ${data.scores[2].toFixed(2)}
    - Capability & Change: ${data.scores[3].toFixed(2)}
    - Overall Maturity: ${data.overallScore.toFixed(2)}
    
    U.S. Benchmarks (Average):
    - Strategy: 4.5
    - Collaboration: 4.3
    - Resources: 4.4
    - Capability: 4.2
    
    The report should include:
    1. Executive Summary
    2. Detailed Pillar Analysis (identifying strengths and weaknesses)
    3. Gap Analysis vs. U.S. Benchmarks
    4. Key Risks (if no action is taken)
    5. Strategic Opportunities
    6. Action Roadmap (Short, Mid, Long term)
    
    Format the output as a professional, structured document with clear headings and bullet points.
    Do not use markdown formatting like bold (**) or italics (*) in the final text, use plain text structure with clear headers (e.g., SECTION 1: ...).
    Ensure the tone is formal and suitable for university leadership.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text || "Failed to generate report.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
}
