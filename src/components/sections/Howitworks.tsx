import { Box, Text } from '@chakra-ui/react';
import { gradientTextStyles } from '../../theme';

const Howitworks = () => {
  return (
    <Box id="howitworks" minH="100vh"  display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles}>
        How It Works
      </Text>
    </Box>
  );
};

export default Howitworks;