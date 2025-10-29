import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { gradientTextStyles } from '../../theme';

const Hero = () => {
  return (
    <Box id="hero" minH="100vh" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Box>
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            textAlign="center"
            mb={4}
            style={gradientTextStyles}
          >
            Where voices connect
          </Text>
          <Flex align="center" justify="center" gap={6} flexWrap="wrap">
            <Text
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight="1.1"
              textAlign="center"
              style={gradientTextStyles}
            >
              and conversations
            </Text>

          </Flex>
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
            textAlign="center"
            mt={4}
            style={gradientTextStyles}
          >
            come alive
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
}; export default Hero;