import { Box, Text, Image, VStack } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { colors } from '../../theme';
import logo from '../../assets/ValeroWhite.svg';
import Aurora from './Aurora';
gsap.registerPlugin(ScrollTrigger);

const AnimatedFooter = () => {
    const logoRef = useRef<HTMLImageElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!logoRef.current || !footerRef.current) return;

        const showAnimation = () => {
            gsap.fromTo(
                logoRef.current,
                {
                    opacity: 0,
                    z: 500,
                    rotationX: 30,
                    transformPerspective: 800,
                    transformOrigin: "center top",
                },
                {
                    opacity: 1,
                    z: 0,
                    rotationX: 0,
                    duration: 1.5,
                    delay: 0.8,
                    ease: "power2.out",
                }
            );
        };

        ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            onEnter: showAnimation,
            onEnterBack: showAnimation,
            onLeave: () => {
                gsap.set(logoRef.current, {
                    opacity: 0,
                    z: 500,
                    rotationX: 30,
                });
            },
            onLeaveBack: () => {
                gsap.set(logoRef.current, {
                    opacity: 0,
                    z: 500,
                    rotationX: 30,
                });
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);


    return (
        <Box
            ref={footerRef}
            width="100%"
            px={{ base: 4, md: 8 }}
            pt={{ base: 8, md: 12 }}
            pb={{ base: 8, md: 12 }}
            position="relative"
            overflow={"hidden"}
            justifyContent={"center"}
            alignItems={"center"}
        >

            <VStack gap={{ base: 6, md: 8 }}
                maxW="1200px"
                mx="auto"
                align="center"        // center everything horizontally
                textAlign="center">
                {/* Links Section */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ base: '1fr 1fr', md: 'repeat(4, 1fr)' }}
                    gap={{ base: 6, md: 8 }}
                    width="100%"
                    maxW="1000px"
                    mx="auto"
                >
                    {/* Product Column */}
                    <VStack align="start" gap={4}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="white" letterSpacing="wide">
                            Product
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Home', 'Features', 'Resources'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize={{ base: 'xs', md: 'sm' }}
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
                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="white" letterSpacing="wide">
                            Template
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Style Guide', 'Instructions', 'Components', 'Changelog', 'Licenses'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize={{ base: 'xs', md: 'sm' }}
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

                    {/* Company Column - Hidden on Mobile, shown on Tablet+ */}
                    <VStack align="start" gap={4} display={{ base: 'none', md: 'flex' }}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="white" letterSpacing="wide">
                            Company
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Contact', 'Privacy Policy', 'Terms of Service', '404', 'Password'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize={{ base: 'xs', md: 'sm' }}
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

                    {/* Social Column - Hidden on Mobile, shown on Tablet+ */}
                    <VStack align="start" gap={4} display={{ base: 'none', md: 'flex' }}>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="semibold" color="white" letterSpacing="wide">
                            Social
                        </Text>
                        <VStack align="start" gap={3}>
                            {['Facebook', 'LinkedIn', 'X', 'YouTube'].map((item) => (
                                <Text
                                    key={item}
                                    fontSize={{ base: 'xs', md: 'sm' }}
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
                        width={{ base: '95%', md: '85%' }}
                        maxW="1000px"
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
                    <VStack
                        justify="center"
                        align="center"
                        gap={{ base: 2, md: 6 }}
                        fontSize={{ base: 'xs', md: 'sm' }}
                        color="rgba(255, 255, 255, 0.6)"
                        display={{ base: 'flex', md: 'flex' }}
                    >
                        <Text textAlign="center">© 2025 Valero. All right reserved.</Text>
                        <Text display={{ base: 'none', md: 'block' }}>Created by Montassar</Text>
                    </VStack>
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
                    blend={1}
                    speed={1}
                />
            </Box>
        </Box>
    );
}

export default AnimatedFooter;
