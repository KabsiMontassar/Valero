import { Box, Text, VStack } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import CurvedLoop from '../CurvedLoop';

const Howitworks = () => {

  return (
    <Box
      id="howitworks"
      pt={20}
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
        pt={20}
      >
        <VStack gap={8} textAlign="center">
          {/* Star icon and small title */}


          <Text
            fontSize="lg"
            fontWeight="medium"
            color={colors.textPrimary}
            letterSpacing="wide"
            textTransform="uppercase"
          >
            ✦ How it works
          </Text>

          {/* Main header with two sections */}
          <VStack gap={6}>
            <Box gap={8} alignItems="center">
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
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Howitworks;