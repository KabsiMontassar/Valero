import { lazy, Suspense } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Hero = lazy(() => import('../components/sections/Hero'));
const Howitworks = lazy(() => import('../components/sections/Howitworks'));
const Footer = lazy(() => import('../components/sections/Footer'));

const Home = () => {
  return (
    <Suspense fallback={
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bg="rgba(0,0,0,0.5)"
        zIndex="9999"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" color="primary" />
      </Box>
    }>
      <Hero />
      <Howitworks />
      <Footer />
    </Suspense>
  );
};

export default Home;