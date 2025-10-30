import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../theme';
import logo from '../assets/ValeroWhite.svg';
import Aurora from './Aurora';
gsap.registerPlugin(ScrollTrigger);

const AnimatedFooter = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!logoRef.current || !footerRef.current) return;

        // Initial state: above and rotated top-first
        gsap.set(logoRef.current, {
            opacity: 0,
            z: 500,                 // away from screen
            rotationX: 30,           // top-first tilt toward viewer
            transformPerspective: 800,
            transformOrigin: "center top", // pivot around top
        });

        ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top 70%",
            onEnter: () => {
                gsap.to(logoRef.current, {
                    opacity: 1,
                    z: 0,             
                    rotationX: 0,    
                    duration: 1.5,
                    delay: 1,
                    ease: "power2.out",
                });
            },
            onEnterBack: () => {
                gsap.to(logoRef.current, {
                    opacity: 1,
                    z: 0,
                    rotationX: 0,
                    duration: 1.5,
                    delay: 1,
                    ease: "power2.out",
                });
            },
            onLeave: () => {
                gsap.to(logoRef.current, {
                    opacity: 0,
                    z: 500,
                    rotationX: 30,    // reset top-first
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            },
            onLeaveBack: () => {
                gsap.to(logoRef.current, {
                    opacity: 0,
                    z: 500,
                    rotationX: 30,    // reset top-first
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <Box
            ref={footerRef}
            width="100%"
            px={8}
            pt={12}
            position="relative"
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
        >

            <VStack gap={8}
                maxW="1200px"
                mx="auto"
                align="center"        // center everything horizontally
                textAlign="center">
                {/* Links Section */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
                    gap={8}
                    width="100%"
                    maxW="1000px"
                    mx="auto"
                >
                    {/* Product Column */}
                    <VStack align="start" gap={4}>
                        <Text fontSize="sm" fontWeight="semibold" color="white" letterSpacing="wide">
                            Product
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Home', 'Features', 'Pricing', 'Resources'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize="sm"
                                    color="rgba(255, 255, 255, 0.7)"
                                    cursor="pointer"
                                    _hover={{ color: "white" }}
                                    transition="color 0.2s"
                                >
                                    {item}
                                </Text>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Template Column */}
                    <VStack align="start" gap={4}>
                        <Text fontSize="sm" fontWeight="semibold" color="white" letterSpacing="wide">
                            Template
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Style Guide', 'Instructions', 'Components', 'Changelog', 'Licenses'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize="sm"
                                    color="rgba(255, 255, 255, 0.7)"
                                    cursor="pointer"
                                    _hover={{ color: "white" }}
                                    transition="color 0.2s"
                                >
                                    {item}
                                </Text>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Company Column */}
                    <VStack align="start" gap={4}>
                        <Text fontSize="sm" fontWeight="semibold" color="white" letterSpacing="wide">
                            Company
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Contact', 'Privacy Policy', 'Terms of Service', '404', 'Password'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize="sm"
                                    color="rgba(255, 255, 255, 0.7)"
                                    cursor="pointer"
                                    _hover={{ color: "white" }}
                                    transition="color 0.2s"
                                >
                                    {item}
                                </Text>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Social Column */}
                    <VStack align="start" gap={4}>
                        <Text fontSize="sm" fontWeight="semibold" color="white" letterSpacing="wide">
                            Social
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Facebook', 'LinkedIn', 'X', 'YouTube'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize="sm"
                                    color="rgba(255, 255, 255, 0.7)"
                                    cursor="pointer"
                                    _hover={{ color: "white" }}
                                    transition="color 0.2s"
                                >
                                    {item}
                                </Text>
                            ))}
                        </VStack>
                    </VStack>
                </Box>



                {/* Logo */}
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"   // center logo horizontally
                    style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                    position="relative"
                    zIndex={1}
                >
                    <Image
                        ref={logoRef}
                        src={logo}
                        alt="Promptly Logo"
                        width="85%"
                        style={{ transformStyle: "preserve-3d" }}
                    />

                </Box>

                {/* Bottom Section */}
                <Box
                    mt={1}
                    width="100%"
                    pt={3}
                    borderTop="1px solid rgba(255, 255, 255, 0.1)"
                    position="relative"
                    zIndex={1}
                >
                    <HStack
                        justify="space-between"
                        align="center"
                        flexWrap="wrap"
                        gap={6}
                        fontSize="sm"
                        color="rgba(255, 255, 255, 0.6)"
                    >
                        <Text>© 2025 Valero. All right reserved.</Text>
                        <Text>Created by Montassar</Text>
                    </HStack>
                </Box>


            </VStack>
            <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                height="400px"
                zIndex={0}
                pointerEvents="none"
            >
                <Aurora
                    colorStops={[colors.primary, colors.secondary, "#3476da"]}
                    blend={0.5}
                    speed={1}
                />
            </Box>
        </Box>
    );
}

export default AnimatedFooter;
