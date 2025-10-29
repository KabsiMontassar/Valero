import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box 
      id="vision" 
      py={20} 
      position="relative"
      bg="backgroundPrimary"
      overflow="hidden"
    >
      {/* Background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background="radial-gradient(circle at center, rgba(122, 175, 207, 0.1) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.md" position="relative">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          textAlign="center"
        >
          <VStack gap={8}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="textPrimary"
              lineHeight="1.2"
              fontWeight="bold"
            >
              Building the Future of{' '}
              <Text as="span" color="primary">
                Connection
              </Text>
            </Heading>

            <MotionText
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color="textMuted"
              lineHeight="1.8"
              maxW="700px"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              VoiceFlow is built for the future of communication — bridging simplicity, 
              speed, and scalability to create meaningful connections in an increasingly 
              digital world.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Box
                bg="surface"
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor="border"
                maxW="600px"
                mx="auto"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #7AAFCF, #9BBED2)',
                  borderTopRadius: '2xl',
                }}
              >
                <VStack gap={6}>
                  <Heading as="h3" fontSize="2xl" color="textPrimary" mb={2}>
                    What's Next?
                  </Heading>
                  
                  <VStack gap={4} align="stretch">
                    <Box textAlign="left">
                      <Text color="primary" fontWeight="semibold" mb={2}>
                        Video Calls
                      </Text>
                      <Text color="textMuted" fontSize="md">
                        High-quality video conferencing with screen sharing and collaborative tools.
                      </Text>
                    </Box>
                    
                    <Box textAlign="left">
                      <Text color="primary" fontWeight="semibold" mb={2}>
                        Mobile Support
                      </Text>
                      <Text color="textMuted" fontSize="md">
                        Native mobile apps for iOS and Android with full feature parity.
                      </Text>
                    </Box>
                    
                    <Box textAlign="left">
                      <Text color="primary" fontWeight="semibold" mb={2}>
                        AI-Enhanced Collaboration
                      </Text>
                      <Text color="textMuted" fontSize="md">
                        Smart features like real-time transcription, translation, and meeting summaries.
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>

            <MotionText
              fontSize={{ base: 'md', md: 'lg' }}
              color="primary"
              fontWeight="semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              textAlign="center"
            >
              "The best communication tools are the ones you don't have to think about using."
            </MotionText>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Vision;