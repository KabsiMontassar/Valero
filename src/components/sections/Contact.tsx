import { Box, Text } from '@chakra-ui/react';
import { gradientTextStyles } from '../../theme';

const Contact = () => {
  return (
    <Box id="contact" pt={10} pb={20} display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles}>
        Contact
      </Text>
    </Box>
  );
};

export default Contact;