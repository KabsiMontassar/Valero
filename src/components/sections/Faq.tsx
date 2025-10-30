import { Box, Text, VStack, Flex } from '@chakra-ui/react';
import { colors } from '../../theme';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    question: "What is Valero?",
    answer: "Valero is a real-time communication platform that combines crystal-clear WebRTC voice chat with instant messaging for seamless team collaboration."
  },
  {
    question: "How does the voice chat work?",
    answer: "Valero uses peer-to-peer WebRTC technology for studio-quality audio with less than 100ms latency, ensuring natural, real-time conversations."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, all communications are end-to-end encrypted with enterprise-grade security and compliance with data protection standards."
  },
  {
    question: "Do I need to install any software?",
    answer: "No installation required! Valero runs entirely in your web browser - just create an account and start communicating instantly."
  },
  {
    question: "How many people can join a room?",
    answer: "Valero supports thousands of concurrent users with optimal voice quality in smaller groups and seamless messaging at any scale."
  },
  {
    question: "Can I use Valero on mobile?",
    answer: "Yes! Valero is fully responsive and works perfectly on smartphones, tablets, and desktop browsers with all features available."
  },
  {
    question: "How reliable is the service?",
    answer: "Valero maintains 99.9% uptime with automatic failover and redundant infrastructure for always-available communication."
  }
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      borderBottom="1px solid"
      borderRadius={"none"}
      overflow="hidden"
      borderColor={colors.primary + "30"}
   
    >
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
        transition={{ duration: 0.2 }}
      >
        <Flex
          p={6}
          w="full"
          justify="space-between"
          align="start"
          _hover={{ bg: colors.primary + "10" }}
        >
          <Text
            fontSize="lg"
            fontWeight="400"
            color={colors.textPrimary}
            textAlign="left"

          >
            {question}
          </Text>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown size={24} color={colors.primary + "60"} />
          </motion.div>
        </Flex>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Box px={6} py={6} textAlign={"start"}>
              <Text fontSize={"md"}   fontWeight="400" color={colors.textMuted} lineHeight="1.6">
                {answer}
              </Text>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

const Faq = () => {


    const bggradient = `linear-gradient(180deg, ${colors.primary + '50'} 10%,#0d1014 50%)`;

  return (
    <Box id="faq" pt={10} pb={20} display="flex" bg={bggradient} alignItems="center" justifyContent="center">
      <VStack textAlign="center" maxW="1000px" w="full" px={8}>
        <Text
          fontSize="md"
          fontWeight="medium"
          color={colors.textPrimary}
          letterSpacing="wide"
          textTransform="uppercase"
        >
          ✦ FAQs
        </Text>

        <Box>
          <Text
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            textAlign="center"
          >
            <Text as="span" color={colors.textPrimary}>
              Frequently Asked Questions
            </Text>
          </Text>
        </Box>

        <VStack w="full" gap={0} maxW="1000px" justifyContent={"center"} alignItems={"middle"}>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Faq;