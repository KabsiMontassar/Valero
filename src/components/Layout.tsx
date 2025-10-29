import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { type ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box minH="100vh" bg="backgroundPrimary">
      {/* Navigation */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={scrolled ? 'rgba(28, 33, 38, 0.8)' : 'transparent'}
        backdropFilter={scrolled ? 'blur(8px)' : 'none'}
        borderBottom={scrolled ? '1px solid' : 'none'}
        borderColor="border"
        transition="all 0.3s ease"
      >
        <Container maxW="container.xl" py={4}>
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold" color="primary">
              VoiceFlow
            </Text>
            <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
              <Link
                onClick={() => scrollToSection('about')}
                color="textPrimary"
                _hover={{ color: 'primary' }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                About
              </Link>
              <Link
                onClick={() => scrollToSection('features')}
                color="textPrimary"
                _hover={{ color: 'primary' }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                Features
              </Link>
              <Link
                onClick={() => scrollToSection('demo')}
                color="textPrimary"
                _hover={{ color: 'primary' }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                Demo
              </Link>
              <Link
                onClick={() => scrollToSection('vision')}
                color="textPrimary"
                _hover={{ color: 'primary' }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                Vision
              </Link>
              <Link
                onClick={() => scrollToSection('contact')}
                color="textPrimary"
                _hover={{ color: 'primary' }}
                transition="all 0.3s ease"
                cursor="pointer"
              >
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main content */}
      <Box pt="80px">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;