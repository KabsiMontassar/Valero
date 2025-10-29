import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import colors from './theme';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Demo from './components/sections/Demo';
import Vision from './components/sections/Vision';
import Contact from './components/sections/Contact';

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
      <Layout>
        <Hero />
        <About />
        <Features />
        <Demo />
        <Vision />
        <Contact />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
