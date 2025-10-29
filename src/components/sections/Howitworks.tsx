import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import CurvedLoop from '../CurvedLoop';

const Howitworks = () => {
  // Star icon component
  const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill={colors.primary} />
    </svg>
  );

  return (
    <Box
      id="howitworks"
      pt={10}
      pb={20}
      bg={colors.backgroundPrimary}
    >

      <CurvedLoop
        marqueeText="CHAT  ✦  HANG OUT  ✦  TALK  ✦  HAVE FUN  ✦"
        speed={.5}
        curveAmount={0}
        direction="right"
        interactive={false}
       />

      {/* Main content */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={20}
      >
        <VStack gap={8} textAlign="center">
          {/* Star icon and small title */}
          <HStack gap={2}>
            <StarIcon />
            <Text
              fontSize="lg"
              fontWeight="medium"
              color={colors.textPrimary}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              How it works
            </Text>
          </HStack>

          {/* Main header with two sections */}
          <VStack gap={6}>
            <HStack gap={8} alignItems="center">
              {/* First section - white text */}
              <VStack gap={2}>
                <Text
                  fontSize="6xl"
                  fontWeight="bold"
                  color={colors.textPrimary}
                  lineHeight="1.1"
                >
                  First
                </Text>
                <Text
                  fontSize="2xl"
                  color={colors.textMuted}
                  maxW="300px"
                >
                  Connect your voice platform seamlessly
                </Text>
              </VStack>

              {/* Second section - gradient text */}
              <VStack gap={2}>
                <Text
                  fontSize="6xl"
                  fontWeight="bold"
                  style={gradientTextStyles}
                  lineHeight="1.1"
                >
                  Second
                </Text>
                <Text
                  fontSize="2xl"
                  color={colors.textMuted}
                  maxW="300px"
                >
                  Transform conversations into insights
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Howitworks;