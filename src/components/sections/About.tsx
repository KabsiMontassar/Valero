import { Box, Container, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Box id="about" py={20} bg="backgroundSecondary">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center">
          <GridItem>
            <MotionBox
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <VStack align="start" gap={6}>
                <Heading
                  as="h2"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="textPrimary"
                  lineHeight="1.2"
                >
                  The Future of{' '}
                  <Text as="span" color="primary">
                    Communication
                  </Text>
                </Heading>
                
                <MotionText
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="textMuted"
                  lineHeight="1.8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                  VoiceFlow was born from a simple idea: communication should be effortless, 
                  instant, and beautifully designed. In a world where teams are distributed 
                  and connections matter more than ever, we built a platform that bridges 
                  the gap between distance and collaboration.
                </MotionText>

                <MotionText
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="textMuted"
                  lineHeight="1.8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                  Whether you're a remote team coordinating projects, friends staying in touch, 
                  or communities building together, VoiceFlow provides the tools you need to 
                  connect authentically in real-time.
                </MotionText>

                <MotionText
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="primary"
                  fontWeight="semibold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                >
                  Built for teams. Designed for humans. Optimized for the future.
                </MotionText>
              </VStack>
            </MotionBox>
          </GridItem>

          <GridItem>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <Box
                bg="surface"
                borderRadius="2xl"
                p={8}
                border="1px solid"
                borderColor="border"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #7AAFCF, #9BBED2)',
                }}
              >
                <VStack gap={6} align="start">
                  <Heading as="h3" fontSize="2xl" color="textPrimary">
                    Why VoiceFlow?
                  </Heading>
                  <VStack gap={4} align="start">
                    <Text color="textMuted" lineHeight="1.6">
                      <Text as="span" color="primary" fontWeight="semibold">Real-time Connection:</Text> 
                      {' '}Experience lag-free voice chat and instant messaging that feels natural.
                    </Text>
                    <Text color="textMuted" lineHeight="1.6">
                      <Text as="span" color="primary" fontWeight="semibold">Intuitive Design:</Text> 
                      {' '}Clean, modern interface that gets out of your way and lets you focus on what matters.
                    </Text>
                    <Text color="textMuted" lineHeight="1.6">
                      <Text as="span" color="primary" fontWeight="semibold">Built for Scale:</Text> 
                      {' '}From intimate conversations to large communities, VoiceFlow adapts to your needs.
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;