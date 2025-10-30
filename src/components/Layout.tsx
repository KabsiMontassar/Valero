import { Box, Container, Flex, HStack, Button, Link, Image, VStack } from '@chakra-ui/react';
import { type ReactNode, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { colors, gradientTextStyles } from '../theme';
import logo from '../assets/logo.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMobileNavClick = (to: string) => {
    setIsMobileMenuOpen(false);
    // Use setTimeout to ensure menu closes before navigation
    setTimeout(() => {
      navigate(to);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }, 300);
  };


  
  return (
    <Box minH="100vh" bg={colors.backgroundPrimary} width="100%" overflow="hidden" margin={0} padding={0}>
      {/* Sticky Logo - Center on mobile, Left on desktop */}
      <Box
        position="fixed"
        top={{ base: 3, md: 5 }}
        left={{ base: '50%', md: 16 }}
        transform={{ base: 'translateX(-50%)', md: 'none' }}
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
              height={{ base: '40px', md: '50px' }}
              width="auto"
            />
          </Box>
        </RouterLink>
      </Box>      {/* Mobile Menu Toggle Button */}
      <Box
        position="fixed"
        top={{ base: 3, md: 6 }}
        right={{ base: 4, md: 16 }}
        zIndex={1001}
        display={{ base: 'block', md: 'none' }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        cursor="pointer"
        color={colors.textPrimary}
        _hover={{ opacity: 0.8 }}
        transition="all 0.3s ease"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Box>

      {/* Sticky GitHub Button - Right */}
      <Box
        position="fixed"
        top={{ base: 3, md: 6 }}
        right={{ base: 4, md: 16 }}
        zIndex={1001}
        transition="all 0.3s ease"
        display={{ base: 'none', md: 'block' }}
      >
        <Link
          href="https://github.com/KabsiMontassar/ValeroVitrine"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: 'none' }}
        >
          <Button
            size="sm"
            bg={colors.backgroundSecondary}
            color={colors.textPrimary}
            border="1px solid"
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
            borderRadius="lg"
            px={6}
            py={4}
            fontWeight="600"
            fontSize="13px"
            transition="all 0.3s ease"
            alignItems="center"
            gap={2}
            _focus={{
              boxShadow: '0 0 0 4px rgba(42, 110, 219, 0.2)'
            }}
            className="animated-border"
          >
            <Github
              size={16}
            />
            View on GitHub
          </Button>
        </Link>
      </Box>

      {/* Navigation - Not Sticky */}
      <Box
        bg="transparent"
        py={4}
        position="relative"
        zIndex={999}
      >
        <Container maxW="container.xl">
          <Flex justify="center" align="center" h="60px">
            {/* Navigation Links - Desktop */}
            <HStack
              gap={8}
              display={{ base: 'none', md: 'flex' }}
              transition="all 0.3s ease"
            >
              <RouterLink to="/">
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  style={isActive('/') ? gradientTextStyles : undefined}
                  className="nav-item"
                >
                  Home
                </Box>
              </RouterLink>
              <RouterLink to="/features">
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  style={isActive('/features') ? gradientTextStyles : undefined}
                  className="nav-item"
                >
                  Features
                </Box>
              </RouterLink>
              <RouterLink to="/contact">
                <Box
                  px={3}
                  py={2}
                  borderRadius="md"
                  transition="all 0.3s ease"
                  color={colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
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

      {/* Mobile Navigation Menu - Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
          />
          {/* Sidebar - Opens from right */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '280px',
              zIndex: 1000,
              overflowY: 'auto',
            }}
          >
            <Box
              height="100%"
              bg={colors.backgroundPrimary}
              border="1px solid"
              borderColor={colors.border}
              display="flex"
              flexDirection="column"
              boxShadow="-10px 10px 40px rgba(0,0,0,0.3)"
            >
              {/* Spacing at top */}
              <Box
                height="70px"
              />

              {/* Navigation Items */}
              <VStack
                gap={0}
                align="stretch"
                flex={1}
                py={4}
                px={0}
              >
                <Box
                  px={6}
                  py={4}
                  transition="all 0.3s ease"
                  color={isActive('/') ? colors.primary : colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  style={isActive('/') ? gradientTextStyles : undefined}
                  className="nav-item"
                  onClick={() => handleMobileNavClick('/')}
                  _hover={{
                    color: colors.primary,
                    paddingRight: '24px',
                  }}
                  borderRight="4px solid"
                  borderRightColor={isActive('/') ? colors.primary : 'transparent'}
                >
                  Home
                </Box>
                <Box
                  px={6}
                  py={4}
                  transition="all 0.3s ease"
                  color={isActive('/features') ? colors.primary : colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  style={isActive('/features') ? gradientTextStyles : undefined}
                  className="nav-item"
                  onClick={() => handleMobileNavClick('/features')}
                  _hover={{
                    color: colors.primary,
                    paddingRight: '24px',
                  }}
                  borderRight="4px solid"
                  borderRightColor={isActive('/features') ? colors.primary : 'transparent'}
                >
                  Features
                </Box>
                <Box
                  px={6}
                  py={4}
                  transition="all 0.3s ease"
                  color={isActive('/contact') ? colors.primary : colors.textPrimary}
                  fontWeight="600"
                  fontSize="16px"
                  cursor="pointer"
                  style={isActive('/contact') ? gradientTextStyles : undefined}
                  className="nav-item"
                  onClick={() => handleMobileNavClick('/contact')}
                  _hover={{
                    color: colors.primary,
                    paddingRight: '24px',
                  }}
                  borderRight="4px solid"
                  borderRightColor={isActive('/contact') ? colors.primary : 'transparent'}
                >
                  Contact
                </Box>
              </VStack>

              {/* GitHub Button at bottom */}
              <Box
                p={4}
                borderTop="1px solid"
                borderColor={colors.borderSubtle}
              >
                <Link
                  href="https://github.com/KabsiMontassar/ValeroVitrine"
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                  w="100%"
                >
                  <Button
                    size="sm"
                    bg={colors.backgroundSecondary}
                    color={colors.textPrimary}
                    border="1px solid"
                    borderColor={colors.border}
                    _hover={{
                      borderColor: colors.primary,
                      color: colors.primary,
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 20px rgba(42, 110, 219, 0.3)',
                    }}
                    borderRadius="lg"
                    px={4}
                    py={3}
                    fontWeight="600"
                    fontSize="13px"
                    transition="all 0.3s ease"
                    alignItems="center"
                    gap={2}
                    w="100%"
                    justifyContent="center"
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                </Link>
              </Box>
            </Box>
          </motion.div>
        </>
      )}

      {/* Main content */}
      <Box>
        {children}
      </Box>
    </Box>
  );
}; export default Layout;