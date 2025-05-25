import type { Lesson, Quiz } from '../types';

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Learning',
    description: 'Learn the fundamentals of effective learning techniques',
    content: 'Learning is a lifelong journey that requires dedication and the right approach. In this lesson, we\'ll explore various learning techniques and how to apply them effectively.',
    duration: 15,
    completed: false,
  },
  {
    id: '2',
    title: 'Memory Techniques',
    description: 'Master the art of memorization',
    content: 'Discover powerful memory techniques like spaced repetition, mind mapping, and the method of loci to enhance your learning capacity.',
    duration: 20,
    completed: false,
  },
  {
    id: '3',
    title: 'Active Recall',
    description: 'Understanding the power of active recall',
    content: 'Active recall is one of the most effective learning techniques. Learn how to implement it in your study routine.',
    duration: 25,
    completed: false,
  },
];

export const quizzes: Quiz[] = [
  {
    id: '1',
    lessonId: '1',
    questions: [
      {
        id: '1-1',
        text: 'What is the most important aspect of effective learning?',
        options: [
          'Consistency',
          'Studying for long hours',
          'Passive reading',
          'Highlighting text'
        ],
        correctAnswer: 0,
      },
      {
        id: '1-2',
        text: 'Which of these is a good learning practice?',
        options: [
          'Cramming before exams',
          'Regular short study sessions',
          'Studying while watching TV',
          'Reading without taking notes'
        ],
        correctAnswer: 1,
      },
    ],
  },
]; 