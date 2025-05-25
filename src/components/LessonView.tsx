import { Box, VStack, Heading, Text, Button, HStack, Progress } from '@chakra-ui/react';
import { FiClock, FiArrowLeft } from 'react-icons/fi';
import type { Lesson } from '../types';
import { useNavigate } from 'react-router-dom';

interface LessonViewProps {
  lesson: Lesson;
  onComplete: (id: string) => void;
}

export const LessonView = ({ lesson, onComplete }: LessonViewProps) => {
  const navigate = useNavigate();

  return (
    <Box bg="white" p={8} borderRadius="lg" boxShadow="sm">
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between">
          <Button
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            onClick={() => navigate('/')}
          >
            Back to Lessons
          </Button>
          <HStack color="gray.500">
            <FiClock />
            <Text>{lesson.duration} mins</Text>
          </HStack>
        </HStack>

        <Box>
          <Heading size="lg" mb={2}>{lesson.title}</Heading>
          <Text color="gray.600" fontSize="lg">{lesson.description}</Text>
        </Box>

        <Box bg="gray.50" p={6} borderRadius="md">
          <Text whiteSpace="pre-wrap">{lesson.content}</Text>
        </Box>

        <Progress value={lesson.completed ? 100 : 0} colorScheme="green" />

        <Button
          colorScheme="green"
          size="lg"
          onClick={() => onComplete(lesson.id)}
          isDisabled={lesson.completed}
        >
          {lesson.completed ? 'Completed' : 'Mark as Complete'}
        </Button>
      </VStack>
    </Box>
  );
}; 