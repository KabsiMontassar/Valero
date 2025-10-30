import { Box, Text, Image } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { innerPaths } from '../types/innerPaths';
import messagecirc from '../../assets/messagecirc.svg';
import messagerec from '../../assets/messagerec.svg';
import mic from '../../assets/mic.svg';
import phone from '../../assets/phone.svg';
import send from '../../assets/send.svg';
import AnimatedFooter from '../ui/AnimatedFooter';
import colors, { gradientTextStyles } from '@/theme';

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

const Footer = () => {
  const morphRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Morph animation (looping)
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 3, ease: 'power1.inOut' },
    });

    innerPaths.slice(1).forEach((path) => {
      tl.to(morphRef.current, { morphSVG: path });
    });
  }, []);

  return (
    <Box
      id="footer"

      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
    >
      <Box id="footer-morpher-animation" position="relative" width="100%" height="250px">
        {/* Horizontal line */}
        <Box
          position="absolute"
          left="20%"
          right="20%"
          top="50%"
          height="2px"
          bg="linear-gradient(to right, #2A6EDB, #7AAFCF)"
          zIndex={0}
          borderRadius="full"
          boxShadow="0 0 15px rgba(42,110,219,0.6)"
        />

        {/* Left icons */}
        <Box
          position="absolute"
          left="20%"
          top="50%"
          transform="translateY(-50%)"
          display="flex"
          gap="30px"
          zIndex={1}
        >
          <Image src={messagecirc} boxSize="56px" />
          <Image src={mic} boxSize="56px" />
          <Image src={phone} boxSize="56px" />
        </Box>

        {/* Center morphing SVG with circular glow */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="300px"
          height="300px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={2}
          bg="radial-gradient(circle, rgba(42,110,219,0.6) 0%, rgba(42,110,219,0) 70%)"

        >
          {/* Circular glow behind black circle */}
          <Box
            position="absolute"

            borderRadius="50%"

            zIndex={0}
          />

          {/* SVG */}
          <svg viewBox="0 0 68 69">
            {/* Outer black circle */}
            <path
              fill="#09090b"
              d="M34 5C49.9818 5 63 18.0611 63 34.25C63 50.4389 49.9818 63.5 34 63.5C18.0182 63.5 5 50.4389 5 34.25C5 18.0611 18.0182 5 34 5Z"
              stroke="url(#paint0_linear_footer)"
              strokeWidth="10"
            />
            {/* Morphing inner shape */}
            <path ref={morphRef} d={innerPaths[0]} fill="url(#paint1_linear_footer)" />
            <defs>

              <linearGradient
                id="paint1_linear_footer"
                x1="34"
                y1="17"
                x2="34"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2A6EDB" />
                <stop offset="1" stopColor="#7AAFCF" />
              </linearGradient>
            </defs>
          </svg>
        </Box>

        {/* Right icons */}
        <Box
          position="absolute"
          right="20%"
          top="50%"
          transform="translateY(-50%)"
          display="flex"
          gap="30px"
          zIndex={1}
        >
          <Image src={messagerec} boxSize="56px" />
          <Image src={send} boxSize="56px" />
          <Image src={messagecirc} boxSize="56px" />
        </Box>
      </Box>

      {/* Footer text */}
      <Box mt={8} mb={12} textAlign="center" px={4} zIndex={1}>
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          lineHeight="1.1"
          mb={6}
        >
          <Text as="span" color={colors.textPrimary}>
            Real-time Communication.
          </Text>
          <br />
          <Text as="span" style={gradientTextStyles}>
            Voice Powered.
          </Text>
        </Text>
      </Box>

      {/* Divider */}
      <Box
        width="100%"
        height=".5px"
        bg="#142552"
        opacity={.4}
        mt={15}
        mb={8}
      />
      <AnimatedFooter />

    </Box>
  );
};

export default Footer;
