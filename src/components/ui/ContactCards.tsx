import React from 'react';
import { Box, Text, Flex, VStack } from '@chakra-ui/react';
import { type LucideIcon } from 'lucide-react';
import colors from '../../theme';

interface ContactItem {
    icon: LucideIcon;
    title: string;
    content: string;
}

interface ContactCardsProps {
    contacts: ContactItem[];
}

const ContactCards: React.FC<ContactCardsProps> = ({ contacts }) => {
    return (
        <Box
            mx="auto"
            alignItems="center"
            justifyContent="center"

        >

            <Box p={8} h="full">
                <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '1.5rem', md: '2rem' }} w="full">
                    {contacts.map((contact, index) => (
                        <VStack


                            w="full"
                            minH={{ base: 'auto', md: '120px' }}
                            minW={{ base: 'auto', md: '400px' }}
                            bg={colors.primary + "20"}
                            borderRadius="md"
                            overflow="hidden"
                            py={5}
                            px={7}

                            transition="all 0.3s ease"

                            key={index} align="flex-start" gap={3} justify="center" flex="1">
                            <Flex align="center" gap={1}>
                                <Box
                                    color="white"
                                    borderRadius="md"
                                    pr={2}
                                    fontSize="3xl"
                                >
                                    <contact.icon size={18} />
                                </Box>
                                <Text
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    color={colors.textPrimary}
                                    fontWeight="semibold"
                                >
                                    {contact.title}
                                </Text>
                            </Flex>
                            <Text fontSize="md" color={colors.textMuted} lineHeight="1.4">
                                {contact.content}
                            </Text>
                        </VStack>
                    ))}
                </Flex>
            </Box>

        </Box>
    );
};

export default ContactCards;