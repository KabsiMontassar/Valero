import { Box, Text, Flex, VStack, Input, Textarea, Button, SimpleGrid, Icon } from '@chakra-ui/react';
import colors, { gradientTextStyles } from '../../theme';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjects = [
    { value: 'support', label: 'Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubjectSelect = (value: string) => {
    setSelectedSubject(value);
    setIsDropdownOpen(false);
  };

  return (
    <Box id="contact" pt={10} pb={20} minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack gap={12} maxW="1200px" w="full" px={8}>
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }}
        >
          <Box position="relative" zIndex={20}>
            <Flex
              align="center"
              justify="center"
              gap={5}
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              fontWeight="bold"
              lineHeight="1.1"
              color={colors.textPrimary}
            >
              <Text>Let's Talk {' '} </Text>
              <Text as="span" style={gradientTextStyles}>
                {' '} Support.
              </Text>
            </Flex>
          </Box>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            maxW="800px"
            w="full"
            p={0}
          >
            <VStack gap={8}>
              <Box gap={4} minW={"xl"}>
                <Box gap={4} >
                  <Text mb={3} fontSize="md" fontWeight="semibold" color={colors.textPrimary}>
                    Full Name
                  </Text>
                  <Input
                    placeholder="Enter your full name"
                    bg={colors.primary + "30"}
                    border="1px solid"
                    id="full-name"

                    borderColor={colors.primary + "80"}
                    borderRadius="0"
                    color={colors.textPrimary}
                    fontSize="lg"
                    p={4}
                    _placeholder={{ color: colors.textMuted }}
                    _hover={{ borderColor: colors.primary }}
                  />
                </Box>
                <Box >
                  <Text my={3} fontSize="md" fontWeight="semibold" color={colors.textPrimary}>
                    Email
                  </Text>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    bg={colors.primary + "30"}
                    border="1px solid"
                    borderColor={colors.primary + "80"}
                    borderRadius="0"
                    color={colors.textPrimary}
                    fontSize="lg"
                    p={4}
                    _placeholder={{ color: colors.textMuted }}
                    _hover={{ borderColor: colors.primary }}
                  />
                </Box>
              </Box>

              <Box w="full">
                <Text mb={3} fontSize="md" fontWeight="semibold" color={colors.textPrimary}>
                  Select Subject
                </Text>
                <Box position="relative">
                  <Box
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    w="full"
                    p={4}
                    bg={colors.primary + "30"}
                    border="1px solid"
                    borderColor={colors.primary + "80"}
                    borderRadius="0"
                    color={selectedSubject ? colors.textPrimary : colors.textMuted}
                    fontSize="lg"
                    cursor="pointer"
                    _hover={{ borderColor: colors.primary }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text>
                      {selectedSubject ? subjects.find(s => s.value === selectedSubject)?.label : 'Choose a subject'}
                    </Text>
                    <Icon
                      as={ChevronDown}
                      w={5}
                      h={5}
                      color={colors.primary}
                      transform={isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                      transition="transform 0.2s ease"
                    />
                  </Box>
                  {isDropdownOpen && (
                    <Box
                      position="absolute"
                      top="100%"
                      left={0}
                      right={0}
                      bg={colors.backgroundSecondary}
                      border="1px solid"
                      borderColor={colors.primary + "80"}
                      borderTop="none"
                      borderRadius="0 0 md md"
                      zIndex={10}
                      maxH="200px"
                      overflowY="auto"
                    >
                      {subjects.map((subject) => (
                        <Box
                          key={subject.value}
                          p={4}
                          cursor="pointer"
                          color={colors.textPrimary}
                          _hover={{ bg: colors.primary + "20" }}
                          onClick={() => handleSubjectSelect(subject.value)}
                          borderBottom="1px solid"
                          borderBottomColor={colors.primary + "20"}
                          _last={{ borderBottom: 'none' }}
                        >
                          {subject.label}
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>

              <Box w="full">
                <Text mb={3} fontSize="md" fontWeight="semibold" color={colors.textPrimary}>
                  Message
                </Text>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  bg={colors.primary + "30"}
                  border="1px solid"
                  borderColor={colors.primary + "80"}
                  borderRadius="0"
                  color={colors.textPrimary}
                  fontSize="lg"
                  p={4}
                  _placeholder={{ color: colors.textMuted }}
                  _hover={{ borderColor: colors.primary }}
                />
              </Box>

              <Button
                w="full"
                size="lg"
                bg={`linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`}
                color="white"
                fontSize="lg"
                fontWeight="semibold"
                p={6}
                borderRadius="md"
                _hover={{
                  transform: 'translateY(-3px)',
                }}
                _active={{
                  transform: 'translateY(-1px)',
                  boxShadow: `0 8px 20px ${colors.primary}30`
                }}
                transition="all 0.3s ease"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="1000px" mx="auto">
            {/* Office Card */}
            <Box
              bg={colors.backgroundSecondary + "20"}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={6}
              textAlign="center"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                borderColor: colors.primary + "50"
              }}
              transition="all 0.3s ease"
            >
              <Icon as={MapPin} w={8} h={8} color={colors.primary} mb={4} />
              <Text fontSize="lg" fontWeight="semibold" color={colors.textPrimary} mb={2}>
                Office
              </Text>
              <Text fontSize="sm" color={colors.textMuted}>
                123 Business Street<br />
                Tech City, TC 12345<br />
                United States
              </Text>
            </Box>

            {/* Email Card */}
            <Box
              bg={colors.backgroundSecondary + "20"}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={6}
              textAlign="center"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                borderColor: colors.primary + "50"
              }}
              transition="all 0.3s ease"
            >
              <Icon as={Mail} w={8} h={8} color={colors.primary} mb={4} />
              <Text fontSize="lg" fontWeight="semibold" color={colors.textPrimary} mb={2}>
                Email
              </Text>
              <Text fontSize="sm" color={colors.textMuted}>
                support@valero.com<br />
                partnerships@valero.com<br />
                hello@valero.com
              </Text>
            </Box>

            {/* Business Hours Card */}
            <Box
              bg={colors.backgroundSecondary + "20"}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={6}
              textAlign="center"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                borderColor: colors.primary + "50"
              }}
              transition="all 0.3s ease"
            >
              <Icon as={Clock} w={8} h={8} color={colors.primary} mb={4} />
              <Text fontSize="lg" fontWeight="semibold" color={colors.textPrimary} mb={2}>
                Business Hours
              </Text>
              <Text fontSize="sm" color={colors.textMuted}>
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST<br />
                24/7 Support Available
              </Text>
            </Box>
          </SimpleGrid>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default Contact;