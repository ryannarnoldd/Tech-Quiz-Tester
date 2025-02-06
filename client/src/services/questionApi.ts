import type { Question } from '../models/Question.js';

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await fetch('/api/questions/random');
    if (!response.ok) {
      throw new Error('Network response was not okay!');
    }
    const data: Question[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch question(s):', error);
    throw error;
  }
};
