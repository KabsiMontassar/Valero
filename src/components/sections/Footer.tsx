import { Box, Text, Image } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { innerPaths } from '../types/innerPaths';
import messagecirc from '../../assets/messagecirc.svg';
import messagerec from '../../assets/messagerec.svg';
import mic from '../../assets/mic.svg';
import phone from '../../assets/phone.svg';
import send from '../../assets/send.svg';

gsap.registerPlugin(MorphSVGPlugin);

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
      pb={20}
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
      <Text mt={8} fontSize="xl" textAlign="center" color="white" opacity={0.85}>
        The Future of Customer <br /> Support has Arrived.
      </Text>

      {/* Divider */}
      <Box 
        width="80%" 
        height="1px" 
        bg="rgba(255, 255, 255, 0.2)" 
        mt={8} 
        mb={8}
      />

      {/* Footer Links Section */}
      <Box width="100%" maxW="1200px" px={8}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={8}>
          {/* Product Column */}
          <Box minW="200px">
            <Text fontSize="sm" fontWeight="semibold" color="rgba(255, 255, 255, 0.6)" mb={4}>
              Product
            </Text>
            <Box display="flex" flexDirection="column" gap={2}>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Home
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Features
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Pricing
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Resources
              </Text>
            </Box>
          </Box>

          {/* Template Column */}
          <Box minW="200px">
            <Text fontSize="sm" fontWeight="semibold" color="rgba(255, 255, 255, 0.6)" mb={4}>
              Template
            </Text>
            <Box display="flex" flexDirection="column" gap={2}>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Style Guide
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Instructions
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Components
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Changelog
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Licenses
              </Text>
            </Box>
          </Box>

          {/* Company Column */}
          <Box minW="200px">
            <Text fontSize="sm" fontWeight="semibold" color="rgba(255, 255, 255, 0.6)" mb={4}>
              Company
            </Text>
            <Box display="flex" flexDirection="column" gap={2}>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Contact
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Privacy Policy
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Terms of Service
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                404
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Password
              </Text>
            </Box>
          </Box>

          {/* Social Column */}
          <Box minW="200px">
            <Text fontSize="sm" fontWeight="semibold" color="rgba(255, 255, 255, 0.6)" mb={4}>
              Social
            </Text>
            <Box display="flex" flexDirection="column" gap={2}>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                Facebook
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                LinkedIn
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                X
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.8)" cursor="pointer" _hover={{ color: "white" }}>
                YouTube
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box mt={8} pt={6} borderTop="1px solid rgba(255, 255, 255, 0.1)">
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={4}>
            {/* Logo */}
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Promptly
            </Text>
            
            {/* Copyright and Credits */}
            <Box display="flex" gap={6} fontSize="sm" color="rgba(255, 255, 255, 0.6)">
              <Text>© 2025 Promptly Template. All right reserved</Text>
              <Text>Created by Flowx</Text>
              <Text>Powered by Webflow</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
