import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { motion } from 'framer-motion';
const Demo = () => {
  return (
    <Box id="Demo" pt={10} pb={20} alignItems="center" justifyContent="center" position="relative" overflow="hidden">
      {/* Content */}
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Box>
          <Text fontSize="4xl" fontWeight="bold" style={gradientTextStyles} mb={8}>
            Features
          </Text>

          {/* macOS Style Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              position="relative"
              width={{ base: "90%", md: "600px", lg: "800px" }}
              height={{ base: "200px", md: "300px", lg: "400px" }}
              mx="auto"
              bg={colors.backgroundSecondary}
              borderRadius="xl"
              border="1px solid"
              borderColor={colors.border}
              overflow="hidden"
              boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
            >
              {/* macOS Window Controls */}
              <Flex
                position="absolute"
                top={3}
                left={4}
                gap={2}
                zIndex={2}
              >
                <Box w="12px" h="12px" borderRadius="50%" bg="#FF5F57" />
                <Box w="12px" h="12px" borderRadius="50%" bg="#FFBD2E" />
                <Box w="12px" h="12px" borderRadius="50%" bg="#28CA42" />
              </Flex>

              {/* Window Content */}
              <Box
                position="relative"
                width="100%"
                height="100%"
                bg={colors.backgroundPrimary}
                pt={12}
              >
                <Image
                  src="https://picsum.photos/800/400?random=1"
                  alt="VoiceFlow Interface Preview"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  borderRadius="0 0 xl xl"
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Demo;