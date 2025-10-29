import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { gradientTextStyles, colors } from '../../theme';

gsap.registerPlugin(MorphSVGPlugin);

// Move paths here so JSX can use them
const innerPaths = [
  // 3.svg
  "M41.3764 48.0253C40.9918 50.4787 37.9632 51.4292 36.2457 49.6355L27.7457 40.7581L18.2739 32.102C16.5297 30.508 17.2274 27.6168 19.5066 26.9937L30.9742 23.8585L42.1769 19.8792C44.4035 19.0882 46.628 21.0623 46.1073 23.3672L43.2799 35.8831L41.3764 48.0253Z",
  // 4.svg
  "M49.6161 30.7508C51.9372 31.8207 51.9429 35.1175 49.6254 36.1954L42.0669 39.7111C41.4762 39.9858 40.991 40.4454 40.6846 41.0204L36.671 48.5522C35.5441 50.6669 32.515 50.6721 31.3808 48.5613L27.3413 41.0433C27.0329 40.4694 26.5461 40.0115 25.9545 39.7388L18.3839 36.2491C16.0628 35.1792 16.0571 31.8824 18.3746 30.8045L25.933 27.2888C26.5238 27.0141 27.009 26.5545 27.3154 25.9795L31.329 18.4477C32.4559 16.333 35.485 16.3278 36.6192 18.4386L40.6587 25.9566C40.9671 26.5305 41.4539 26.9884 42.0455 27.2611L49.6161 30.7508Z",
  // 5.svg
  "M31.4704 15.9679C32.6496 14.1182 35.3504 14.1182 36.5296 15.9679L40.4681 22.1455C40.8462 22.7387 41.4208 23.1801 42.0914 23.3926L49.0842 25.6086C51.0273 26.2243 51.8038 28.557 50.6174 30.2145L45.9979 36.6687C45.6181 37.1993 45.4217 37.8392 45.4384 38.4915L45.6411 46.4152C45.6957 48.55 43.5656 50.0567 41.5709 49.2941L35.0712 46.8095C34.3814 46.5458 33.6186 46.5458 32.9288 46.8095L26.4291 49.2941C24.4344 50.0567 22.3043 48.55 22.3589 46.4152L22.5616 38.4915C22.5783 37.8392 22.3819 37.1993 22.0021 36.6687L17.3826 30.2145C16.1962 28.5569 16.9727 26.2243 18.9158 25.6086L25.9086 23.3926C26.5792 23.1801 27.1538 22.7387 27.5319 22.1455L31.4704 15.9679Z",
  // 6.svg
  "M40.3323 17.4747C42.3336 16.3366 44.818 17.7837 44.8154 20.086L44.8094 25.2133C44.8082 26.2424 45.3346 27.2003 46.204 27.7511L50.46 30.4471C52.2985 31.6118 52.324 34.285 50.5081 35.4846L45.6081 38.7214C44.8273 39.2372 44.332 40.0877 44.2685 41.0212L43.8704 46.8803C43.7228 49.0516 41.3849 50.3483 39.4649 49.3236L35.0201 46.9517C34.1121 46.4672 33.0192 46.4819 32.1246 46.9906L27.6676 49.5253C25.6664 50.6634 23.1819 49.2163 23.1846 46.914L23.1905 41.7867C23.1917 40.7576 22.6653 39.7997 21.7959 39.249L17.54 36.5529C15.7015 35.3883 15.6759 32.715 17.4918 31.5154L22.3919 28.2786C23.1726 27.7628 23.668 26.9124 23.7314 25.9788L24.1296 20.1197C24.2771 17.9484 26.6151 16.6518 28.5351 17.6764L32.9799 20.0483C33.8878 20.5328 34.9807 20.5181 35.8753 20.0094L40.3323 17.4747Z"
];

const Hero = () => {
  const morphRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 2, ease: 'power1.inOut' },
    });

    innerPaths.slice(1).forEach(path => {
      tl.to(morphRef.current, { morphSVG: path });
    });
  }, []);



  return (
    <Box
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bg={colors.backgroundPrimary}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Box position="relative" zIndex={20} mb="-400px" mt={20}>
          <Text
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="bold"
            lineHeight="1.1"
            textAlign="center"
            color={colors.textPrimary}
          >
            Where voices connect and <br />
            <Text as="span" style={gradientTextStyles}>
              conversations come alive
            </Text>
          </Text>
        </Box>

        {/* Blue Layers + Center Circle */}
        <Box position="relative" display="inline-block" width="1400px" height="1400px" mt={-16}>
          <motion.div
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            {/* Blue Layers */}
            {[
              { size: 1400, opacity: '01' },
              { size: 1220, opacity: '02' },
              { size: 1040, opacity: '03' },
              { size: 860, opacity: '05' },
              { size: 680, opacity: '08' },
              { size: 500, opacity: '10' },
              { size: 320, opacity: '15' },
              { size: 200, opacity: '25' },
              { size: 150, opacity: '35' }
            ].map(layer => (
              <Box
                key={layer.size}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width={`${layer.size}px`}
                height={`${layer.size}px`}
                bg={`#2A6EDB${layer.opacity}`}
                borderRadius="50%"
              />
            ))}

            {/* Center Circle with Morph */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="300px"
              height="300px"
              bg="#13233d"  // <-- Updated background color
              borderRadius="50%"
              overflow="hidden"
              zIndex={10}
            >
              <svg viewBox="0 0 68 69" width="100%" height="100%">
                {/* Outer circle stays static */}
                <path
                  fill="#13233d"
                  d="M34 5C49.9818 5 63 18.0611 63 34.25C63 50.4389 49.9818 63.5 34 63.5C18.0182 63.5 5 50.4389 5 34.25C5 18.0611 18.0182 5 34 5Z"
                  stroke="url(#paint0_linear_40_52)"
                  strokeWidth="10"
                />
                {/* Morphing path */}
                <path ref={morphRef} d={innerPaths[0]} fill="url(#paint1_linear_40_52)" />
                <defs>
                  <linearGradient id="paint0_linear_40_52" x1="34" y1="0" x2="34" y2="68.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2A6EDB" />
                    <stop offset="1" stopColor="#7AAFCF" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_40_52" x1="34" y1="17" x2="34" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2A6EDB" />
                    <stop offset="1" stopColor="#7AAFCF" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
