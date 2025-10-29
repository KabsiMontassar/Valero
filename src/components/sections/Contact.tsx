import { Box, Container, Heading, Text, VStack, HStack, Link, Icon } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Mail, Heart } from 'lucide-react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box id="contact" py={20} bg="backgroundSecondary">
      <Container maxW="container.md">
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
            >
              Let's{' '}
              <Text as="span" color="primary">
                Connect
              </Text>
            </Heading>

            <MotionText
              fontSize={{ base: 'lg', md: 'xl' }}
              color="textMuted"
              lineHeight="1.6"
              maxW="500px"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Have questions, feedback, or want to collaborate? 
              I'd love to hear from you and discuss the future of communication.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <VStack gap={6}>
                <Box
                  bg="surface"
                  borderRadius="2xl"
                  p={8}
                  border="1px solid"
                  borderColor="border"
                  maxW="400px"
                  _hover={{
                    borderColor: 'primary',
                    boxShadow: '0 8px 25px rgba(122, 175, 207, 0.15)',
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack gap={4}>
                    <Heading as="h3" fontSize="xl" color="textPrimary">
                      Montassar Kebsi
                    </Heading>
                    <Text color="textMuted" fontSize="md">
                      Creator & Developer of VoiceFlow
                    </Text>
                    
                    <VStack gap={3} mt={4}>
                      <Link
                        href="mailto:kebsimontassar@gmail.com"
                        display="flex"
                        alignItems="center"
                        gap={3}
                        color="textMuted"
                        _hover={{ color: 'primary' }}
                        transition="all 0.3s ease"
                      >
                        <Icon as={Mail} boxSize={5} />
                        <Text>kebsimontassar@gmail.com</Text>
                      </Link>
                      
                      <Link
                        href="https://github.com/KabsiMontassar"
                        target="_blank"
                        display="flex"
                        alignItems="center"
                        gap={3}
                        color="textMuted"
                        _hover={{ color: 'primary' }}
                        transition="all 0.3s ease"
                      >
                        <Icon as={Github} boxSize={5} />
                        <Text>@KabsiMontassar</Text>
                      </Link>
                    </VStack>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </VStack>
        </MotionBox>
      </Container>

      {/* Footer */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        mt={16}
        pt={8}
        borderTop="1px solid"
        borderColor="border"
      >
        <Container maxW="container.xl">
          <VStack gap={4} textAlign="center">
            <HStack gap={2} justify="center" align="center">
              <Text color="textMuted" fontSize="md">
                © 2025 VoiceFlow — Built with
              </Text>
              <Icon as={Heart} boxSize={4} color="error" />
              <Text color="textMuted" fontSize="md">
                by Montassar Kebsi
              </Text>
            </HStack>
            
            <Text color="textMuted" fontSize="sm" opacity={0.7}>
              Crafted with React, TypeScript, Chakra UI, Framer Motion & GSAP
            </Text>
          </VStack>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default Contact;