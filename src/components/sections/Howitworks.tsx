import { Box, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';
import { gradientTextStyles, colors } from '../../theme';
import FeatureCards from '../ui/FeatureCards';
import TimeLine from '../ui/TimeLine';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      id="howitworks"
      ref={sectionRef}
      pt={{ base: 4, md: 20 }}
      pb={{ base: 12, md: 20 }}
      bg={colors.backgroundPrimary}
      position="relative"
      overflow="hidden"
      px={{ base: 4, md: 0 }}
    >
      <VStack gap={{ base: 12, md: 16 }} pt={{ base: 4, md: 20 }} px={{ base: 4, md: 8 }}>
        <VStack gap={6} textAlign="center" maxW="800px" px={{ base: 2, md: 0 }}>
          <Text
            fontSize={{ base: 'xs', md: 'lg' }}
            fontWeight="medium"
            color={colors.textPrimary}
            letterSpacing="wide"
            textTransform="uppercase"
          >
            ✦ How it works
          </Text>
          <Box>
            <Text
              fontSize={{ base: 'xl', sm: '2xl', md: '4xl', lg: '6xl', xl: '7xl' }}
              fontWeight="bold"
              lineHeight="1.1"
              textAlign="center"
            >
              <Text as="span" color={colors.textPrimary}>
                Transform your voice into{' '}
              </Text>
              <Text as="span" style={gradientTextStyles}>
                meaningful connections
              </Text>
            </Text>
          </Box>
        </VStack>
        <TimeLine />
      </VStack>
      <FeatureCards />
    </Box>
  );
};

export default HowItWorks;
