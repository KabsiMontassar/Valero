import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { motion } from 'framer-motion';
const Demo = () => {
  return (
    <Flex
      id="Demo"
      direction="column"
      align="center"
      justify="center"
      pt={20}
      pb={20}
      position="relative"
      overflow="hidden"
      minH="80vh"
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}
      >
        <Box position="relative" zIndex={20} mb={12}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={1}
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            lineHeight="1.1"
            color={colors.textPrimary}
          >
            <Text>See Valero</Text>
            <Text as="span" style={gradientTextStyles}>
              in action
            </Text>
          </Flex>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, width: '100%' }}
       
      >
        <Box textAlign="center"  >
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
              borderRadius="md"
              border="1px solid"
              borderColor={colors.border}
              overflow="hidden"
              boxShadow="
                0 0 20px rgba(42, 110, 219, 0.3),
                0 0 40px rgba(42, 110, 219, 0.2),
                0 0 80px rgba(42, 110, 219, 0.1),
                0 20px 40px rgba(0, 0, 0, 0.3)
              "
              _before={{
                content: '""',
                position: 'absolute',
                top: '-2px',
                left: '-2px',
                right: '-2px',
                bottom: '-2px',
                background: 'linear-gradient(45deg, #2A6EDB, #7AAFCF, #2A6EDB)',
                borderRadius: 'xl',
                zIndex: -1,
                opacity: 0.1,
                filter: 'blur(8px)',
              }}
            >
              {/* macOS Window Controls */}
              <Flex
                position="absolute"
                top={2}
                left={3}
                gap={2}
                zIndex={2}
              >
                <Box w="7px" h="7px" borderRadius="50%" bg="#FF5F57" />
                <Box w="7px" h="7px" borderRadius="50%" bg="#FFBD2E" />
                <Box w="7px" h="7px" borderRadius="50%" bg="#28CA42" />
              </Flex>

              {/* Window Content */}
              <Box
                position="relative"
                width="100%"
                height="100%"
                bg={colors.backgroundPrimary}
                pt={5}
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
    </Flex>
  );
};

export default Demo;