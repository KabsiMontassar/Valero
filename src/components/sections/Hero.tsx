import { Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { gradientTextStyles, colors } from '../../theme';
import messagecirc from '../../assets/messagecirc.svg';
import messagerec from '../../assets/messagerec.svg';
import mic from '../../assets/mic.svg';
import phone from '../../assets/phone.svg';
import send from '../../assets/send.svg';
import { innerPaths } from '../types/innerPaths';
gsap.registerPlugin(MorphSVGPlugin);



const Hero = () => {
  const morphRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 3, ease: 'power1.inOut' },
    });

    innerPaths.slice(1).forEach(path => {
      tl.to(morphRef.current, { morphSVG: path });
    });


    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Box
      id="hero"
      pb={10}
      
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bg={colors.backgroundPrimary}
    >
      <motion.div
        key="hero-animation" // Force re-mount on navigation
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Box position="relative" zIndex={20} mt={20} mb={"-100px"} ref={textRef}>
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
        <Box position="relative" display="inline-block" width="1400px" height="900px" mt={-16}>
          <motion.div
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            {/* Blue Layers */}
            {[1400, 1220, 1040, 860, 680, 500, 320, 200, 150].map((size, i) => (
              <Box
                key={i}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                width={`${size}px`}
                height={`${size}px`}
                bg={`#2A6EDB${('0' + (i + 1)).slice(-2)}`}
                borderRadius="50%"
              />
            ))}

            {/* Orbiting Icons - Clean mathematical approach with increased spacing */}
            {/* Outer orbit - 280px radius */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0',
                height: '0',
              }}
            >
              {/* Icon 1 at 0 degrees (right) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(280px, 0px)',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Image src={messagecirc} alt="Message Circle" boxSize="50px" />
              </motion.div>
              {/* Icon 2 at 180 degrees (left) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(-280px, 0px)',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Image src={messagerec} alt="Message Record" boxSize="50px" />
              </motion.div>
            </motion.div>

            {/* Medium orbit - 220px radius, counter-clockwise */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0',
                height: '0',
              }}
            >
              {/* Icon 1 at 90 degrees (top) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(0px, -220px)',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Image src={mic} alt="Microphone" boxSize="50px" />
              </motion.div>
              {/* Icon 2 at 270 degrees (bottom) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(0px, 220px)',
                  width: '50px',
                  height: '50px',
                }}
              >
                <Image src={phone} alt="Phone" boxSize="50px" />
              </motion.div>
            </motion.div>

            {/* Inner orbit - 170px radius */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '0',
                height: '0',
              }}
            >
              {/* Icon at 45 degrees (top-right) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(120px, -120px)',
                  width: '160px',
                  height: '160px',
                }}
              >
                <Image src={send} alt="Send" boxSize="50px" />
              </motion.div>
            </motion.div>

            {/* Center Circle with Morph */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="300px"
              height="300px"
              bg="#111a29"
              borderRadius="50%"
              overflow="hidden"
              zIndex={10}
            >
              <svg viewBox="0 0 68 69" width="100%" height="100%">
                <path
                  fill="#13233d"
                  d="M34 5C49.9818 5 63 18.0611 63 34.25C63 50.4389 49.9818 63.5 34 63.5C18.0182 63.5 5 50.4389 5 34.25C5 18.0611 18.0182 5 34 5Z"
                  stroke="url(#paint0_linear_40_52)"
                  strokeWidth="10"
                />
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
