import { Box, Button, Container, Heading, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, ArrowDown } from 'lucide-react';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !particlesRef.current) return;

    // Create floating particles
    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.backgroundColor = '#7AAFCF';
      particle.style.borderRadius = '50%';
      particle.style.opacity = '0.6';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particlesRef.current.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: '+=100',
        x: '+=50',
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.1,
      });
    });

    // Background gradient animation
    gsap.to(containerRef.current, {
      backgroundPosition: '400% 0%',
      duration: 8,
      repeat: -1,
      ease: 'none',
    });

    return () => {
      particles.forEach(particle => {
        if (particlesRef.current?.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      });
    };
  }, []);

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={containerRef}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      background="linear-gradient(135deg, #1C2126 0%, #22282E 50%, #2B3238 100%)"
      backgroundSize="400% 400%"
      overflow="hidden"
    >
      {/* Floating particles */}
      <Box
        ref={particlesRef}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack gap={8} textAlign="center" py={20}>
          <MotionHeading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            color="textPrimary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Talk. Connect.{' '}
            <Text as="span" color="primary">
              Collaborate
            </Text>
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color="textMuted"
            maxW="600px"
            lineHeight="1.6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            VoiceFlow brings people together through instant voice and chat — 
            in real time, beautifully simple.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <HStack gap={6} justify="center" flexWrap="wrap">
              <Button
                bg="primary"
                color="white"
                size="lg"
                onClick={scrollToFeatures}
                _hover={{
                  bg: 'secondary',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(122, 175, 207, 0.3)',
                }}
                transition="all 0.3s ease"
              >
                <ArrowDown size={20} style={{ marginRight: '8px' }} />
                Explore Features
              </Button>
              <Link href="https://github.com/KabsiMontassar" target="_blank">
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
                  <Github size={20} style={{ marginRight: '8px' }} />
                  View on GitHub
                </Button>
              </Link>
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;