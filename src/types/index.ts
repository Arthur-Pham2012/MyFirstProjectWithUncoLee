export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: number; // in minutes
  completed: boolean;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
} 