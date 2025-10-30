import { Box, Text, VStack, Grid, GridItem, HStack } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { useBreakpointValue } from '@chakra-ui/react';
import {
    Zap,
    Users,
    Globe,
    BarChart3,
    TrendingUp,
    Clock,
} from 'lucide-react';

const featureItems = [
    {
        id: 'crystal-clear-voice',
        icon: Users,
        title: 'Crystal Clear Voice',
        description: 'Experience studio-quality audio with 99.9%< uptime and <100ms< latency for natural conversations.',
    },
    {
        id: 'instant-messaging',
        icon: Zap,
        title: 'Lightning Fast Chat',
        description: 'Messages delivered in <10ms with real-time typing indicators and read receipts.',
    },
    {
        id: 'global-scale',
        icon: Globe,
        title: 'Global Scale',
        description: 'Support 10,000+ concurrent users with automatic regional routing for optimal performance.',
    },
    {
        id: 'cost-saving',
        icon: TrendingUp,
        title: '90% Cost Reduction',
        description: 'Eliminate expensive telephony costs with browser-based voice chat that scales effortlessly.',
    },
    {
        id: 'easy-setup',
        icon: Zap,
        title: '5-Minute Setup',
        description: 'Get started in under 5 minutes with our plug-and-play integration and comprehensive docs.',
    },
    {
        id: 'reliable',
        icon: Clock,
        title: 'Always Available',
        description: '24/7 reliability with automatic failover and 99.9% service level agreement.',
    },
    {
        id: 'secure',
        icon: Users,
        title: 'Enterprise Security',
        description: 'End-to-end encryption and 100% compliance with data protection standards.',
    },
    {
        id: 'productivity',
        icon: BarChart3,
        title: '3x Productivity Boost',
        description: 'Teams report 3x faster decision-making with seamless voice and text collaboration.',
    },
];

interface FeatureIconProps {
    icon: React.ComponentType<any>;

}

interface FeatureCardProps {
    feature: {
        id: string;
        icon: React.ComponentType<any>;
        title: string;
        description: string;
    };
}

const FeatureIcon = ({ icon: IconComponent }: FeatureIconProps) => {
    const iconSize = useBreakpointValue({ base: 16, md: 18 });
    return (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ base: '28px', md: '32px' }}
        height={{ base: '28px', md: '32px' }}
        borderRadius="md"
        background="#FFFFFF10"
        opacity={20}
        position="relative"
        mb={2}
        flexShrink={0}
    >
        <IconComponent 
         size={iconSize}
        color="#3073da" strokeWidth={1.8} />
    </Box>
    );
};




const FeatureCard = ({ feature }: FeatureCardProps) => (
    <GridItem key={feature.id}>
        <Box
            py={{ base: 3, md: 4 }}
            px={{ base: 4, md: 6 }}
            borderRadius="2xl"
            bg={colors.backgroundSecondary + '50'}
            height="100%"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                borderColor: colors.primary + '30',
            }}
            display="flex"
            flexDirection="column"
        >
            <HStack
                gap={{ base: 1.5, md: 2 }}
                textAlign="start"
                align="flex-start"
            >
                <FeatureIcon icon={feature.icon} />

                <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="bold"
                    color={colors.secondary}
                    mb={{ base: 1, md: 2 }}
                    lineHeight="1.3"
                >
                    {feature.title}
                </Text>
            </HStack>

            <Text
                fontSize={{ base: 'xs', md: 'sm' }}
                color={colors.textPrimary}
                lineHeight="1.6"
                flex={1}
                fontWeight="normal"
                mt={{ base: 1, md: 2 }}
            >
                {feature.description}
            </Text>
        </Box>
    </GridItem>
);

const FeatureCards = () => {
    return (
        <Box
            id="features"
            pt={{ base: 16, md: 28 }}
            pb={{ base: 20, md: 32 }}
            bg={colors.backgroundPrimary}
            position="relative"
            overflow="hidden"
        >
            <VStack gap={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }} maxW="1200px" mx="auto">
                {/* Header */}
                <VStack gap={4} textAlign="center" maxW="800px">
                    <Text
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="semibold"
                        color={colors.textPrimary}
                        letterSpacing="wide"
                        textTransform="uppercase"
                    >
                        ✦ Features
                    </Text>

                    <Box>
                        <Text
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
                            fontWeight="bold"
                            lineHeight="1.1"
                            mb={6}
                        >
                            <Text as="span" color={colors.textPrimary}>
                                Built for Scale.
                            </Text>
                            <br />
                            <Text as="span" style={gradientTextStyles}>
                                Engineered for Performance.
                            </Text>
                        </Text>
                    </Box>

                    <Text
                        fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
                        color={colors.textMuted}
                        lineHeight="1.7"
                        maxW="600px"
                        fontWeight="normal"
                    >
                        Seamlessly powering thousands of live connections with ultra-low latency and rock-solid reliability.
                    </Text>
                </VStack>

                {/* Features Grid */}
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    gap={{ base: 2.5, md: 3 }}
                    w="100%"
                    justifyContent="center"
                >
                    {/* Row 1: 2 cards, centered */}
                    <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} display="flex" justifyContent="center" gap={{ base: 2, md: 3 }} flexWrap="wrap">
                        <FeatureCard feature={featureItems[0]} />
                        <FeatureCard feature={featureItems[1]} />
                    </GridItem>
                    {/* Row 2: 3 cards, centered */}
                    <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} display="flex" justifyContent="center" gap={{ base: 2, md: 3 }} flexWrap="wrap">
                        <FeatureCard feature={featureItems[2]} />
                        <FeatureCard feature={featureItems[3]} />
                        <FeatureCard feature={featureItems[4]} />
                    </GridItem>
                    {/* Row 3: 2 cards, centered */}
                    <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} display="flex" justifyContent="center" gap={{ base: 2, md: 3 }} flexWrap="wrap">
                        <FeatureCard feature={featureItems[5]} />
                        <FeatureCard feature={featureItems[6]} />
                    </GridItem>
                    {/* Row 4: 1 card, centered */}
                    <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} display="flex" justifyContent="center" gap={{ base: 2, md: 3 }} flexWrap="wrap">
                        <FeatureCard feature={featureItems[7]} />
                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    );
};

export default FeatureCards;








