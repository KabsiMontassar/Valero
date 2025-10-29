import { Box, Container, Heading, Text, VStack, Button, Link } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Github, ExternalLink } from 'lucide-react';

const MotionBox = motion(Box);

const Demo = () => {
  const ref = useRef(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!mockupRef.current || !isInView) return;

    // Floating animation for the mockup
    gsap.to(mockupRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, [isInView]);

  return (
    <Box id="demo" py={20} bg="backgroundSecondary">
      <Container maxW="container.xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          textAlign="center"
        >
          <VStack gap={8} maxW="800px" mx="auto">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              color="textPrimary"
              lineHeight="1.2"
            >
              See VoiceFlow in{' '}
              <Text as="span" color="primary">
                Action
              </Text>
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="textMuted"
              lineHeight="1.6"
              maxW="600px"
            >
              Experience the power of real-time communication with our intuitive interface 
              designed for modern teams and communities.
            </Text>

            {/* Demo Mockup */}
            <MotionBox
              ref={mockupRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              mt={8}
            >
              <Box
                position="relative"
                maxW="700px"
                mx="auto"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 25px 80px rgba(0, 0, 0, 0.3)"
                border="1px solid"
                borderColor="border"
              >
                {/* Browser chrome */}
                <Box
                  bg="backgroundTertiary"
                  px={6}
                  py={4}
                  borderBottom="1px solid"
                  borderColor="border"
                >
                  <Box display="flex" alignItems="center" gap={3}>
                    <Box display="flex" gap={2}>
                      <Box w={3} h={3} borderRadius="full" bg="#ff5f56" />
                      <Box w={3} h={3} borderRadius="full" bg="#ffbd2e" />
                      <Box w={3} h={3} borderRadius="full" bg="#27ca3f" />
                    </Box>
                    <Box
                      flex={1}
                      bg="backgroundPrimary"
                      borderRadius="md"
                      px={4}
                      py={2}
                      ml={4}
                    >
                      <Text fontSize="sm" color="textMuted" textAlign="left">
                        voiceflow.app
                      </Text>
                    </Box>
                  </Box>
                </Box>

                {/* Demo content */}
                <Box
                  bg="backgroundPrimary"
                  minH="400px"
                  position="relative"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack gap={6}>
                    <Box
                      w={16}
                      h={16}
                      borderRadius="full"
                      bg="linear-gradient(135deg, #7AAFCF, #9BBED2)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      animation="pulse 2s infinite"
                    >
                      <Box
                        w={8}
                        h={8}
                        borderRadius="full"
                        bg="white"
                        opacity={0.9}
                      />
                    </Box>
                    <Text fontSize="lg" color="textPrimary" fontWeight="semibold">
                      VoiceFlow Demo
                    </Text>
                    <Text fontSize="md" color="textMuted" textAlign="center" maxW="300px">
                      Interactive demo showcasing real-time voice chat, messaging, 
                      and room management features.
                    </Text>
                  </VStack>

                  {/* Floating elements */}
                  <Box
                    position="absolute"
                    top="20%"
                    left="10%"
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg="primary"
                    opacity={0.6}
                    animation="float 3s ease-in-out infinite"
                  />
                  <Box
                    position="absolute"
                    top="60%"
                    right="15%"
                    w={2}
                    h={2}
                    borderRadius="full"
                    bg="secondary"
                    opacity={0.7}
                    animation="float 4s ease-in-out infinite reverse"
                  />
                  <Box
                    position="absolute"
                    bottom="20%"
                    left="20%"
                    w={4}
                    h={4}
                    borderRadius="full"
                    bg="info"
                    opacity={0.5}
                    animation="float 2.5s ease-in-out infinite"
                  />
                </Box>
              </Box>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <VStack gap={4} direction={{ base: 'column', sm: 'row' }}>
                <Link href="https://github.com/KabsiMontassar" target="_blank">
                  <Button
                    bg="primary"
                    color="white"
                    size="lg"
                    _hover={{
                      bg: 'secondary',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(122, 175, 207, 0.3)',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Github size={20} style={{ marginRight: '8px' }} />
                    View Source Code
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="lg"
                  border="1px solid"
                  borderColor="border"
                  _hover={{
                    borderColor: 'primary',
                    boxShadow: '0 4px 15px rgba(122, 175, 207, 0.2)',
                  }}
                >
                  <ExternalLink size={20} style={{ marginRight: '8px' }} />
                  Live Demo (Coming Soon)
                </Button>
              </VStack>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
        `}
      </style>
    </Box>
  );
};

export default Demo;