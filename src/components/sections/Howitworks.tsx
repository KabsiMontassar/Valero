import { Box, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { gradientTextStyles, colors  , gradientBackgroundStyles} from '../../theme';
import CurvedLoop from '../CurvedLoop';
import { Plus, UserPlus, MessageCircle, Mic } from 'lucide-react';
// ===== SVG ICONS ===== //
const Icon = ({ icon }: { icon: React.ComponentType<any> }) => {
  const IconComponent = icon;
  return <IconComponent size={64} strokeWidth={1.5} />;
};
const checkpoints = [
  {
    id: 'Create',
    number: '01',
    title: 'Create',
    description: 'User creates a new room.',
    icon: Plus
  },
  {
    id: 'Invite',
    number: '02',
    title: 'Invite',
    description: 'User invites others to join the room.',
    icon: UserPlus
  },
  {
    id: 'Chat',
    number: '03',
    title: 'Chat',
    description: 'User chats with others in the room.',
    icon: MessageCircle
  },
  {
    id: 'Talk',
    number: '04',
    title: 'Talk',
    description: 'User talks and interacts with others.',
    icon: Mic
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const drawLineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const drawLine = drawLineRef.current;
    const items = itemsRef.current;

    if (!timeline || !drawLine) return;

    const handleScroll = () => {
      const windowDistance = window.scrollY;
      const windowHeight = window.innerHeight / 2;
      const timelineDistance = timeline.getBoundingClientRect().top + window.scrollY;
      const greyLineHeight = timeline.scrollHeight;

      // Calculate line height based on scroll position
      if (windowDistance >= timelineDistance - windowHeight) {
        const line = windowDistance - timelineDistance + windowHeight;

        if (line <= greyLineHeight) {
          drawLine.style.height = `${Math.max(0, line + 20)}px`;
        } else {
          drawLine.style.height = `${greyLineHeight}px`;
        }
      }

      // Add in-view class to items
      const bottom = drawLine.getBoundingClientRect().top + window.scrollY + drawLine.offsetHeight;

      items.forEach((item) => {
        if (!item) return;
        const circlePosition = item.getBoundingClientRect().top + window.scrollY;

        if (bottom > circlePosition) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      id="howitworks"
      ref={sectionRef}
      pt={20}
      pb={40}
      bg={colors.backgroundPrimary}
      position="relative"
      overflow="hidden"
    >
      <CurvedLoop
        marqueeText="CHAT ✦ HANG OUT ✦ TALK ✦ HAVE FUN ✦"
        speed={0.5}
        direction="right"
        curveAmount={0}
        interactive={false}
      />

      <VStack gap={16} pt={20} px={8}>
        <VStack gap={6} textAlign="center" maxW="800px">
          <Text
            fontSize="lg"
            fontWeight="medium"
            color={colors.textPrimary}
            letterSpacing="wide"
            textTransform="uppercase"
          >
            ✦ How it works
          </Text>

          <Box>
            <Text
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="bold"
              lineHeight="1.1"
              textAlign="center"
            >
              <Text as="span" color={colors.textPrimary}>
                Transform your voice into{' '}
              </Text>
              <Text as="span" style={gradientTextStyles}>
                meaningful connections
              </Text>
            </Text>
          </Box>
        </VStack>

        <Box
          position="relative"
          w="100%"
          maxW="1100px"
          mx="auto"
          mt={20}
          minH="1600px"
          py={10}
          ref={timelineRef}
        >
          {/* Static/Grey line */}
          <Box
            position="absolute"
            left="50%"
            top="0"
            bottom="0"
            w="1px"
            bg={colors.border}
            transform="translateX(-50%)"
            borderRadius="2px"
          />

          {/* Animated/Draw line */}
          <Box
            ref={drawLineRef}
            position="absolute"
            left="50%"
            top="0"
            width="2px"
            transform="translateX(-50%)"
            background={`linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.primary} 100%)`}
            boxShadow={`0 0 20px ${colors.primary}80, 0 0 40px ${colors.primary}40`}
            borderRadius="1px"
            height="0"
          />

          {/* Timeline items */}
          <VStack gap={40} position="relative" py={20}>
            {checkpoints.map((cp, i) => (
              <Box
                key={cp.id}
                ref={(el: HTMLDivElement | null) => {
                  if (el) itemsRef.current[i] = el;
                }}
                position="relative"
                w="100%"
                minH="180px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="timeline-item"
              >
                <style>{`
                  .timeline-item {
                    --primary: ${colors.primary};
                    --secondary: ${colors.secondary};
                    --textPrimary: ${colors.textPrimary};
                    --textMuted: ${colors.textMuted};
                    --gradient: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
                  }
                  
                  .timeline-item.in-view .checkpoint-circle {
                    background-color: ${colors.primary};
                    border-color: ${colors.secondary};
                    box-shadow: 0 0 60px ${colors.primary}90, 0 0 120px ${colors.primary}50, inset 0 0 20px rgba(255,255,255,0.1);
                    transform: scale(1.2);
                    animation: pulse-glow 2s ease-in-out infinite;
                  }
                  
                  .timeline-item.in-view .checkpoint-circle-text {
                    color: ${colors.textPrimary};
                    text-shadow: 0 0 15px ${colors.primary}60;
                    animation: text-glow 2s ease-in-out infinite;
                  }
                  
                  .timeline-item.in-view .checkpoint-icon {
                    transform: scale(1.3);
                    color: ${colors.primary};
                    opacity: 1;
                    bg: ${colors.backgroundTertiary};
                    border-color: ${colors.primary}40;
                    box-shadow: 0 8px 25px ${colors.primary}40, 0 0 40px ${colors.primary}30;
                    filter: drop-shadow(0 0 20px ${colors.primary}50);
                  }
                  
                  .timeline-item.in-view .checkpoint-content {
                    opacity: 1;
                    transform: scale(1.05);
                  
                  }
                  
                  .timeline-item.in-view .checkpoint-title {
                    color: ${colors.textPrimary};
                    text-shadow: 0 0 10px ${colors.primary}40;
                  }
                  
                  .timeline-item.in-view .checkpoint-description {
                    color: ${colors.textPrimary};
                    opacity: 1;
                  }
                 
                `}</style>
                {/* Left Icon */}
                <Box
                  className="checkpoint-icon"
                  position="absolute"
                  left="30%"
                  color={colors.textMuted}
                  opacity={0.6}
                  p={4}
                  borderRadius="xl"
                  transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  transform="scale(1)"
                  bg={colors.backgroundSecondary}
                  border="1px solid"
                  borderColor={colors.borderSubtle}
                  boxShadow="0 4px 12px rgba(0,0,0,0.3)"
                  _hover={{
                    bg: colors.backgroundTertiary,
                    borderColor: colors.border,
                  }}

                >
                  <Icon icon={cp.icon} />
                </Box>

                {/* Center Circle with before pseudo element */}
                <Box
                  className="checkpoint-circle"
                  position="relative"
                  width="90px"
                  height="90px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor={colors.border}
                  bg={colors.backgroundSecondary}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  zIndex={2}
                  transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  boxShadow="0 4px 16px rgba(0,0,0,0.3)"
                >
                  <Text
                    className="checkpoint-circle-text"
                    fontSize="2xl"
                    fontWeight="bold"
                    color={colors.textMuted}
                    transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    zIndex={1}
                  >
                    {cp.number}
                  </Text>
                </Box>

                {/* Right Content */}
                <Box
                  className="checkpoint-content"
                  position="absolute"
                  left="60%"
                  maxW="400px"
                  p={8}
                  borderRadius="2xl"



                  transition="all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  transform="scale(1)"

                >
                  <VStack align="start" gap={3}>
                    <Text
                      className="checkpoint-title"
                      fontSize="6xl"
                      fontWeight="bold"
                      color={colors.textPrimary}
                      transition="all 0.4s ease"
                      lineHeight="1.2"
                      letterSpacing="tight"
                    >
                      {cp.title}
                    </Text>
                    <Box
                      w="100%"
                      maxW="150px" // Constrain description width to match title area
                    >
                      <Text
                        className="checkpoint-description"
                        fontSize="xs"
                        color={colors.textMuted}
                        lineHeight="1.5"
                        transition="all 0.4s ease"
                        opacity={0.8}
                        wordBreak="break-word"
                        whiteSpace="normal"
                      >
                        {cp.description}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default HowItWorks;
