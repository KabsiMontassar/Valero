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
import CurvedLoop from '../ui/CurvedLoop';
gsap.registerPlugin(MorphSVGPlugin);



const Hero = () => {
  const morphRef = useRef<SVGPathElement>(null);
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
      pb={{ base: 6, md: 10 }}


      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bg={colors.backgroundPrimary}
      px={{ base: 4, md: 0 }}
      minH={{ base: '0vh', md: '100vh' }}
    >
      <motion.div
        key="hero-animation" // Force re-mount on navigation
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Box
          position="relative"
          zIndex={20}
          mt={{ base: 10, md: 20 }}
          mb={{ base: 0, lg: "-100px" }}
          px={{ base: 2, md: 0 }}
        >
          <Text
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl', '2xl': '7xl' }}
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
        <Box
          position="relative"
          display="inline-block"
          width={{ base: '300px', sm: '600px', md: '1000px', lg: '1400px' }}
          height={{ base: '300px', sm: '600px', md: '800px', lg: '900px' }}

          style={{
            '--scale': window.innerWidth < 768 ? '0.3' : window.innerWidth < 1024 ? '0.6' : window.innerWidth < 1280 ? '0.8' : '1'
          } as React.CSSProperties}
        >
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
                width={{ base: `${size * 0.3}px`, sm: `${size * 0.6}px`, md: `${size * 0.8}px`, lg: `${size}px` }}
                height={{ base: `${size * 0.3}px`, sm: `${size * 0.6}px`, md: `${size * 0.8}px`, lg: `${size}px` }}
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
                  transform: 'translate(-50%, -50%) translate(calc(280px * var(--scale)), 0px)',
                  width: 'calc(50px * var(--scale))',
                  height: 'calc(50px * var(--scale))',
                }}
              >
                <Image src={messagecirc} alt="Message Circle" boxSize={{ base: '15px', sm: '30px', md: '40px', lg: '50px' }} />
              </motion.div>
              {/* Icon 2 at 180 degrees (left) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(calc(-280px * var(--scale)), 0px)',
                  width: 'calc(50px * var(--scale))',
                  height: 'calc(50px * var(--scale))',
                }}
              >
                <Image src={messagerec} alt="Message Record" boxSize={{ base: '15px', sm: '30px', md: '40px', lg: '50px' }} />
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
                  transform: 'translate(-50%, -50%) translate(0px, calc(-220px * var(--scale)))',
                  width: 'calc(50px * var(--scale))',
                  height: 'calc(50px * var(--scale))',
                }}
              >
                <Image src={mic} alt="Microphone" boxSize={{ base: '15px', sm: '30px', md: '40px', lg: '50px' }} />
              </motion.div>
              {/* Icon 2 at 270 degrees (bottom) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  transform: 'translate(-50%, -50%) translate(0px, calc(220px * var(--scale)))',
                  width: 'calc(50px * var(--scale))',
                  height: 'calc(50px * var(--scale))',
                }}
              >
                <Image src={phone} alt="Phone" boxSize={{ base: '15px', sm: '30px', md: '40px', lg: '50px' }} />
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
                  transform: 'translate(-50%, -50%) translate(calc(120px * var(--scale)), calc(-120px * var(--scale)))',
                  width: 'calc(160px * var(--scale))',
                  height: 'calc(160px * var(--scale))',
                }}
              >
                <Image src={send} alt="Send" boxSize={{ base: '15px', sm: '30px', md: '40px', lg: '50px' }} />
              </motion.div>
            </motion.div>

            {/* Center Circle with Morph */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width={{ base: '100px', sm: '150px', md: '200px', lg: '300px' }}
              height={{ base: '100px', sm: '150px', md: '200px', lg: '300px' }}
              bg="#111a29"
              borderRadius="50%"
              overflow="hidden"
              zIndex={10}
              style={{ '--scale': 'var(--scale, 1)' } as React.CSSProperties}
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
      <Box
        pt={{ base: "30px", sm: "30px", md: "40px", lg: "50px" }}
         height={{ base: "120px", sm: "160px", md: "200px", lg: "240px" }}
        bottom={0}>
        <CurvedLoop
          marqueeText="CHAT ✦ HANG OUT ✦ TALK ✦ HAVE FUN ✦"
          speed={0.5}
          
          direction="right"
          curveAmount={0}
          interactive={false}
        />
      </Box>
    </Box>
  );
};

export default Hero;
