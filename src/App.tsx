import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { lessons } from './data/lessons';
import { LessonCard } from './components/LessonCard';
import { LessonView } from './components/LessonView';
import { Navigation } from './components/Navigation';
import type { Lesson } from './types';

interface LessonViewWrapperProps {
  userLessons: Lesson[];
  onComplete: (id: string) => void;
}

interface LessonListProps {
  lessons: Lesson[];
  onStart: (id: string) => void;
}

function LessonViewWrapper({ userLessons, onComplete }: LessonViewWrapperProps) {
  const { id } = useParams();
  const lesson = userLessons.find(l => l.id === id) || userLessons[0];
  return <LessonView lesson={lesson} onComplete={onComplete} />;
}

function LessonList({ lessons, onStart }: LessonListProps) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={6}
    >
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          onStart={onStart}
        />
      ))}
    </Box>
  );
}

function AppContent() {
  const [userLessons, setUserLessons] = useState<Lesson[]>(lessons);
  const navigate = useNavigate();

  const handleStartLesson = (id: string) => {
    navigate(`/lesson/${id}`);
  };

  const handleCompleteLesson = (id: string) => {
    setUserLessons(prevLessons =>
      prevLessons.map(lesson =>
        lesson.id === id ? { ...lesson, completed: true } : lesson
      )
    );
  };

  return (
    <>
      <Navigation />
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.lg">
          <Routes>
            <Route
              path="/"
              element={<LessonList lessons={userLessons} onStart={handleStartLesson} />}
            />
            <Route
              path="/lesson/:id"
              element={<LessonViewWrapper userLessons={userLessons} onComplete={handleCompleteLesson} />}
            />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppContent />
      </Router>
    </ChakraProvider>
  );
}

export default App;
