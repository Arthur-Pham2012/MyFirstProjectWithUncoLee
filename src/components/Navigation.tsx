import { Box, Container, Heading, HStack, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Box bg="white" py={4} shadow="sm">
      <Container maxW="container.lg">
        <HStack justify="space-between">
          <RouterLink to="/">
            <Heading size="md" color="blue.600">Learning App</Heading>
          </RouterLink>
          <HStack spacing={4}>
            <Button as={RouterLink} to="/" variant="ghost">
              Lessons
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}; 