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
      pt={{ base: 12, md: 20 }}
      pb={{ base: 12, md: 20 }}
      position="relative"
      overflow="hidden"
      minH={{ base: '60vh', md: '80vh' }}
      px={{ base: 4, md: 0 }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}
      >
        <Box position="relative" zIndex={20} mb={{ base: 6, md: 12 }}>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={1}
            fontSize={{ base: 'xl', sm: '2xl', md: '4xl', lg: '6xl', xl: '7xl' }}
            fontWeight="bold"
            lineHeight="1.1"
            color={colors.textPrimary}
            px={{ base: 2, md: 0 }}
          >
            <Text>Experience Real-time</Text>
            <Text as="span" style={gradientTextStyles}>
              Voice & Chat
            </Text>
          </Flex>
          <Box position="relative" zIndex={10}>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="400"
              color={colors.textMuted}
              mt={{ base: 2, md: 4 }}
            >
              See how Valero delivers crystal-clear audio and instant messaging in one seamless platform.
            </Text>
          </Box>
          <Box position="relative" zIndex={10}>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="400"
              color={colors.textMuted}
              mt={{ base: 1, md: 2 }}
            >
               See the interface preview below..
            </Text>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, width: '100%' }}

      >
        <Box textAlign="center" width="100%" px={{ base: 2, md: 4 }}>
          {/* macOS Style Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box
              position="relative"
              width={{ base: "100%", md: "600px", lg: "800px" }}
              height={{ base: "180px", sm: "240px", md: "300px", lg: "400px" }}
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
                top={{ base: 1, md: 2 }}
                left={{ base: 2, md: 3 }}
                gap={{ base: 1, md: 2 }}
                zIndex={2}
              >
                <Box w={{ base: '5px', md: '7px' }} h={{ base: '5px', md: '7px' }} borderRadius="50%" bg="#FF5F57" />
                <Box w={{ base: '5px', md: '7px' }} h={{ base: '5px', md: '7px' }} borderRadius="50%" bg="#FFBD2E" />
                <Box w={{ base: '5px', md: '7px' }} h={{ base: '5px', md: '7px' }} borderRadius="50%" bg="#28CA42" />
              </Flex>

              {/* Window Content */}
              <Box
                position="relative"
                width="100%"
                height="100%"
                bg={colors.backgroundPrimary}
                pt={{ base: 3, md: 5 }}
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