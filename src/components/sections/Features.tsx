import { Box, Text, Image, Flex, VStack } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { Globe, Zap, Shield, Users } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    icon: Users,
    title: 'Crystal Clear Voice',
    description: 'Studio-quality audio with WebRTC technology for natural, lag-free conversations.',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Real-time Messaging',
    description: 'Instant message delivery with typing indicators and read receipts.',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 3,
    icon: Globe,
    title: 'Global Scale',
    description: 'Handle thousands of concurrent users with automatic regional routing.',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 4,
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance with data protection standards.',
    image: 'https://picsum.photos/400/300?random=5'
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
      pt={20}
      pb={20}
      position="relative"
      overflow="hidden"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="1100px" w="100%" px={8}>
        <VStack gap={16} align="stretch">



          {features.map((feature) => (
            <Box
              key={feature.id}
              className="feature-section"
              bg={colors.backgroundPrimary}
              borderRadius="2xl"
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
              <Flex minH="500px">
                {/* Left Half - Content */}
                <Box
                  flex="1"
                  p={8}
                  display="flex"
                  alignItems="center"
                >
                  <VStack align="flex-start" gap={3} maxW="400px">
                    {/* Icon */}
                    <Box color={colors.primary}
                      bg={colors.backgroundSecondary + "70"}
                      borderRadius="md"
                      p={2}
                      fontSize="4xl">
                      <feature.icon size={28} />
                    </Box>

                    {/* Title with gradient */}
                    <Text
                      fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}


                      style={gradientTextStyles}
                    >
                      {feature.title}
                    </Text>

                    {/* Description */}
                    <Text
                      fontSize="md"
                      color={colors.textMuted}

                    >
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>

                {/* Right Half - Image */}
                <Box flex="1" position="relative" overflow="hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
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

