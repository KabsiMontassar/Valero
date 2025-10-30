import { ChakraProvider, createSystem, defaultConfig, Box, Spinner } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import colors from './theme';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: colors.primary },
        secondary: { value: colors.secondary },
        textPrimary: { value: colors.textPrimary },
        textMuted: { value: colors.textMuted },
        backgroundPrimary: { value: colors.backgroundPrimary },
        backgroundSecondary: { value: colors.backgroundSecondary },
        backgroundTertiary: { value: colors.backgroundTertiary },
        surface: { value: colors.surface },
        border: { value: colors.border },
        borderSubtle: { value: colors.borderSubtle },
        success: { value: colors.success },
        warning: { value: colors.warning },
        error: { value: colors.error },
        info: { value: colors.info },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider value={system}>
      <Router>
        <Layout>
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
