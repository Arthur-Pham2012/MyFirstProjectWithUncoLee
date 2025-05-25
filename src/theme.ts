import { theme as baseTheme } from '@chakra-ui/react';

export const theme = {
  ...baseTheme,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'blue',
      },
    },
  },
}; 