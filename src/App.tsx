import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import colors from './theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
