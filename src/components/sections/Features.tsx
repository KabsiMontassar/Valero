import { Box, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { Globe, Zap, Shield, Users } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from '../../assets/screens/CrystalClear.png';
import image3 from '../../assets/screens/GlobalScale.png';
import image2 from '../../assets/screens/RealTimemessaging.png';
import image4 from '../../assets/screens/security.png';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    icon: Users,
    title: 'Crystal Clear Voice',
    description: 'Studio-quality audio with WebRTC technology for natural, lag-free conversations.',
    image: image1
  },
  {
    id: 2,
    icon: Zap,
    title: 'Real-time Messaging',
    description: 'Instant message delivery with typing indicators and read receipts.',
    image:  image2
  },
  {
    id: 3,
    icon: Globe,
    title: 'Global Scale',
    description: 'Handle thousands of concurrent users with automatic regional routing.',
    image: image3
  },
  {
    id: 4,
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance with data protection standards.',
    image: image4
  }
];

const Features = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.feature-section') as HTMLElement[];
    console.log(sections)
    sections.forEach(section => {
      gsap.to(section, {
        opacity: 0,
       
        
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start: "center center",
          pin: true,
          pinSpacing: false,
        }
      })
    })
  }, []);

  return (
    <Box
      id="features"
      pt={{ base: 12, md: 20 }}
      pb={{ base: 12, md: 20 }}
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="1100px" w="100%" px={{ base: 4, md: 8 }}>
        <VStack gap={{ base: 8, md: 12, lg: 16 }} align="stretch">



          {features.map((feature) => (
            <Box
              key={feature.id}
              className="feature-section"
              bg={colors.backgroundPrimary}
              borderRadius={{ base: 'xl', md: '2xl' }}
              border="1px solid"
              borderColor="white"
              overflow="hidden"
              boxShadow="
                0 0 30px rgba(42, 110, 219, 0.15),
                0 0 60px rgba(42, 110, 219, 0.1),
                0 0 120px rgba(42, 110, 219, 0.05),
                0 20px 40px rgba(0, 0, 0, 0.3)
              "
              _hover={{
                boxShadow: `
                  0 0 40px rgba(42, 110, 219, 0.25),
                  0 0 80px rgba(42, 110, 219, 0.15),
                  0 0 160px rgba(42, 110, 219, 0.08),
                  0 25px 50px rgba(0, 0, 0, 0.4)
                `,
                transform: 'translateY(-5px)'
              }}

            >
              <Flex direction={{ base: 'column', md: 'row' }} minH={{ base: 'auto', md: '320px' }}>
                {/* Left Half - Content */}
                <Box
                  flex={{ base: 'auto', md: 1 }}
                  p={{ base: 4, md: 8 }}
                  display="flex"
                  alignItems="center"
                  minH={{ base: 'auto', md: 'inherit' }}
                >
                  <VStack align="flex-start" gap={3} maxW="400px">
                    {/* Icon */}
                    <Box color={colors.primary}
                      bg={colors.backgroundSecondary + "70"}
                      borderRadius="md"
                      p={2}
                      fontSize={{ base: '3xl', md: '4xl' }}>
                      <feature.icon size={28} />
                    </Box>

                    {/* Title with gradient */}
                    <Text
                      fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}
                      fontWeight="bold"

                      style={gradientTextStyles}
                    >
                      {feature.title}
                    </Text>

                    {/* Description */}
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color={colors.textMuted}
                      lineHeight="1.6"

                    >
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>

                {/* Right Half - Image */}
                <Box flex={{ base: 'auto', md: 1 }} position="relative" overflow="hidden" minH={{ base: '200px', md: 'inherit' }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  
                   
                  />
                </Box>
              </Flex>
            </Box>
          ))}



        </VStack>
      </Box>
    </Box>
  );
};

export default Features;

