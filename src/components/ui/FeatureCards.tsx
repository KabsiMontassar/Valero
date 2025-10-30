import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { gradientTextStyles, colors } from '../../theme';
import { useBreakpointValue } from '@chakra-ui/react';
import { FeatureItems } from '../types/innerPaths';

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
                color="#3073da"
                strokeWidth={1.8}
            />
        </Box>
    );
};

const FeatureCard = ({ feature }: FeatureCardProps) => (
    <Box
        py={{ base: 3, md: 3 }}
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
        width={{ base: '100%', lg: 'auto' }}
        minW={{ base: '100%', lg: '350px' }}
        maxW={{ base: '100%', lg: '400px' }}
    >
        <HStack
            gap={{ base: 2, md: 3 }}
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
);

const FeatureCards = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Box
            id="features"
            pt={{ base: 16, md: 28 }}
            pb={{ base: 5, md: 32 }}
            bg={colors.backgroundPrimary}
            position="relative"
            overflow="hidden"
        >
            <VStack gap={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }} maxW="1400px" mx="auto">
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

                {/* Features Layout */}
                {isMobile ? (
                    <VStack gap={4} w="100%" maxW="400px">
                        {FeatureItems.map((feature) => (
                            <FeatureCard key={feature.id} feature={feature} />
                        ))}
                    </VStack>
                ) : (
                    <VStack gap={8} w="100%">
                        {/* Row 1: 2 cards */}
                        <Flex gap={6} justifyContent="center" flexWrap="wrap" w="100%">
                            {FeatureItems.slice(0, 2).map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </Flex>

                        {/* Row 2: 3 cards */}
                        <Flex gap={6} justifyContent="center" flexWrap="wrap" w="100%">
                            {FeatureItems.slice(2, 5).map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </Flex>

                        {/* Row 3: 2 cards */}
                        <Flex gap={6} justifyContent="center" flexWrap="wrap" w="100%">
                            {FeatureItems.slice(5, 7).map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </Flex>

                        {/* Row 4: 1 card */}
                        <Flex gap={6} justifyContent="center" flexWrap="wrap" w="100%">
                            {FeatureItems.slice(7, 8).map((feature) => (
                                <FeatureCard key={feature.id} feature={feature} />
                            ))}
                        </Flex>
                    </VStack>
                )}
            </VStack>
        </Box>
    );
};

export default FeatureCards;