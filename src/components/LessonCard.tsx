import { Box, Heading, Text, Button, Badge, VStack, HStack } from '@chakra-ui/react';
import { FiClock, FiCheckCircle } from 'react-icons/fi';
import type { Lesson } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  onStart: (id: string) => void;
}

export const LessonCard = ({ lesson, onStart }: LessonCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      boxShadow="sm"
      bg="white"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
    >
      <VStack align="start" spacing={4}>
        <HStack justify="space-between" width="100%">
          <Heading size="md">{lesson.title}</Heading>
          {lesson.completed && (
            <Badge colorScheme="green">
              <HStack spacing={1}>
                <FiCheckCircle />
                <Text>Completed</Text>
              </HStack>
            </Badge>
          )}
        </HStack>
        
        <Text color="gray.600">{lesson.description}</Text>
        
        <HStack spacing={4}>
          <HStack color="gray.500">
            <FiClock />
            <Text>{lesson.duration} mins</Text>
          </HStack>
        </HStack>

        <Button
          colorScheme="blue"
          onClick={() => onStart(lesson.id)}
          width="100%"
        >
          {lesson.completed ? 'Review Lesson' : 'Start Lesson'}
        </Button>
      </VStack>
    </Box>
  );
}; 