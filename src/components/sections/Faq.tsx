import { Box, Text } from '@chakra-ui/react';
import { gradientTextStyles } from '../../theme';

const Faq = () => {
  return (
    <Box id="faq" minH="100vh"  display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles}>
        FAQ
      </Text>
    </Box>
  );
};

export default Faq;