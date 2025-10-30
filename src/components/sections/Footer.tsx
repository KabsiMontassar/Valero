import { Box, Text } from '@chakra-ui/react';
import { gradientTextStyles } from '../../theme';

const Footer = () => {
  return (
    <Box id="footer"  pb={20} display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles}>
        Footer
      </Text>
    </Box>
  );
};

export default Footer;