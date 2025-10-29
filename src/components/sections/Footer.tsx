import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box id="footer" minH="100vh"  display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" color="gray.800">
        Footer
      </Text>
    </Box>
  );
};

export default Footer;