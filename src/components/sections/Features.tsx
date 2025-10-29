import { Box, Container, Grid, GridItem, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mic, 
  MessageCircle, 
  Home, 
  Users, 
  UserPlus, 
  Zap 
} from 'lucide-react';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const FeatureCard = ({ icon, title, description, delay, isInView }: FeatureCardProps) => (
  <MotionGridItem
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    <Box
      bg="surface"
      p={8}
      borderRadius="2xl"
      border="1px solid"
      borderColor="border"
      height="100%"
      position="relative"
      overflow="hidden"
      _hover={{
        transform: 'translateY(-8px)',
        borderColor: 'primary',
        boxShadow: '0 12px 40px rgba(122, 175, 207, 0.15)',
      }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      <VStack align="start" gap={4} height="100%">
        <Box
          p={3}
          borderRadius="xl"
          bg="rgba(122, 175, 207, 0.1)"
          border="1px solid"
          borderColor="rgba(122, 175, 207, 0.2)"
        >
          <Icon as={icon} boxSize={6} color="primary" />
        </Box>
        
        <Heading as="h3" fontSize="xl" color="textPrimary" fontWeight="semibold">
          {title}
        </Heading>
        
        <Text color="textMuted" lineHeight="1.6" flex={1}>
          {description}
        </Text>
      </VStack>
      
      {/* Subtle gradient overlay on hover */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background="linear-gradient(135deg, rgba(122, 175, 207, 0.05) 0%, transparent 50%)"
        opacity={0}
        _groupHover={{ opacity: 1 }}
        transition="opacity 0.3s ease"
        pointerEvents="none"
      />
    </Box>
  </MotionGridItem>
);

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Mic,
      title: 'Voice Chat',
      description: 'Talk live in real time with crystal-clear audio quality and zero lag.',
    },
    {
      icon: MessageCircle,
      title: 'Instant Messaging',
      description: 'Send messages with typing indicators and real-time delivery status.',
    },
    {
      icon: Home,
      title: 'Rooms',
      description: 'Create private or public spaces easily with customizable settings.',
    },
    {
      icon: Users,
      title: 'Presence Tracking',
      description: 'Know who is online, offline, or currently speaking at any moment.',
    },
    {
      icon: UserPlus,
      title: 'Friends System',
      description: 'Connect with people instantly and build your communication network.',
    },
    {
      icon: Zap,
      title: 'Fast & Reliable',
      description: 'Optimized for performance with low latency and high reliability.',
    },
  ];

  return (
    <Box id="features" py={20} bg="backgroundPrimary">
      <Container maxW="container.xl">
        <MotionBox
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          textAlign="center"
          mb={16}
        >
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            color="textPrimary"
            mb={4}
          >
            Powerful Features for{' '}
            <Text as="span" color="primary">
              Seamless Communication
            </Text>
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="textMuted"
            maxW="600px"
            mx="auto"
            lineHeight="1.6"
          >
            Everything you need to connect, collaborate, and communicate effectively 
            in one beautifully designed platform.
          </Text>
        </MotionBox>

        <Grid
          templateColumns={{ 
            base: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }}
          gap={8}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;