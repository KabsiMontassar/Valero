import { Box, Container, Flex, HStack, Button, Link, Image } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';
import { colors, gradientTextStyles } from '../theme';
import logo from '../assets/logo.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };



  return (
    <Box minH="100vh" bg={colors.backgroundPrimary}>
      {/* Sticky Logo - Left */}
      <Box
        position="fixed"
        top={7}
        left={24}
        zIndex={1001}
        transition="all 0.3s ease"
      >
        <RouterLink to="/">
          <Box
            cursor="pointer"
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.3s ease"
          >
            <Image
              src={logo}
              alt="Velaro Logo"
              height="70px"
              width="auto"
            />
          </Box>
        </RouterLink>
      </Box>

      {/* Sticky GitHub Button - Right */}
      <Box
        position="fixed"
        top={8}
        right={24}
        zIndex={1001}
        transition="all 0.3s ease"
      >
        <Link
          href="https://github.com/KabsiMontassar/VoiceFlowVitrine"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: 'none' }}
        >
          <Button
            size="lg"
            bg={colors.backgroundSecondary}
            color={colors.textPrimary}
            border="2px solid"
            borderColor={colors.border}
            _hover={{
              borderColor: 'transparent',
              color: colors.textPrimary,
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 6px 20px rgba(42, 110, 219, 0.3)',
              animation: 'rotate 2s linear infinite'
            }}
            _active={{
              transform: 'translateY(0) scale(1.02)',
              animation: 'rotate 2s linear infinite'
            }}
            borderRadius="xl"
            px={10}
            py={6}
            fontWeight="600"
            fontSize="16px"
            transition="all 0.3s ease"
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            gap={3}
            _focus={{
              boxShadow: '0 0 0 4px rgba(42, 110, 219, 0.2)'
            }}
            className="animated-border"
          >
            <Github
              
              size={20}
            />
            View on GitHub
          </Button>
        </Link>
      </Box>

      {/* Navigation - Not Sticky */}
      <Box
        bg="transparent"
        py={6}
        position="relative"
        zIndex={999}
      >
        <Container maxW="container.xl">
          <Flex justify="center" align="center" h="80px">
            {/* Navigation Links - Center */}
            <HStack
              gap={12}
              display={{ base: 'none', md: 'flex' }}
              transition="all 0.3s ease"
            >
              <RouterLink to="/">
                <Box
                  px={4}
                  py={3}
                  borderRadius="lg"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="24px"
                  cursor="pointer"
                  style={isActive('/') ? gradientTextStyles : undefined}
                  className="nav-item"
                >
                  Home
                </Box>
              </RouterLink>
              <RouterLink to="/features">
                <Box
                  px={4}
                  py={3}
                  borderRadius="lg"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="24px"
                  cursor="pointer"
                  style={isActive('/features') ? gradientTextStyles : undefined}
                  className="nav-item"
                >
                  Features
                </Box>
              </RouterLink>
              <RouterLink to="/contact">
                <Box
                  px={4}
                  py={3}
                  borderRadius="lg"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="24px"
                  cursor="pointer"
                  style={isActive('/contact') ? gradientTextStyles : undefined}
                  className="nav-item"
                >
                  Contact
                </Box>
              </RouterLink>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main content */}
      <Box>
        {children}
      </Box>
    </Box>
  );
}; export default Layout;