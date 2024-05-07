import { Box, Flex, Heading, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="brand.900" w="100%" p={4}>
          <Flex justify="space-between" align="center" maxW="container.md" m="0 auto">
            <Heading as="h1" size="lg" color="white">John Doe</Heading>
            <Flex as="nav">
              <Link href="#home" p={2} color="white" fontSize="md"><FaHome /> Home</Link>
              <Link href="#about" p={2} color="white" fontSize="md"><FaUser /> About</Link>
              <Link href="#contact" p={2} color="white" fontSize="md"><FaEnvelope /> Contact</Link>
            </Flex>
          </Flex>
        </Box>
        <Flex direction="column" flex="1" justify="center" align="center" bg="gray.50" p={4}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl" id="home">Welcome</Heading>
            <Text fontSize="lg">I'm a professional web developer and designer based in New York. I specialize in creating high-quality, responsive websites and applications.</Text>
          </VStack>
        </Flex>
        <Box as="footer" bg="brand.800" color="white" p={4}>
          <Flex justify="center" align="center">
            <Text>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;