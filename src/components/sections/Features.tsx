import { Box, Text } from '@chakra-ui/react';
import { gradientTextStyles } from '../../theme';

const Features = () => {
  return (
    <Box id="features" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles}>
        Features
      </Text>
    </Box>
  );
};

export default Features;