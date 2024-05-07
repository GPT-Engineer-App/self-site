import { Box, Flex, Heading, Text, VStack, Link, Container, SimpleGrid, Image, AspectRatio } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Index = () => {
  const images = ['/images/monkey1.jpg', '/images/monkey2.jpg', '/images/monkey3.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <Container maxW="container.xl" p={0}>
      <AspectRatio ratio={16 / 9} maxW="full">
        <Box position="relative" w="full" h="full">
          <Image src={images[currentImage]} alt={`Monkey ${currentImage + 1}`} boxSize="full" objectFit="cover" />
        </Box>
      </AspectRatio>
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
          <SimpleGrid columns={3} spacing={10} py={10}>
            <Box bg="white" shadow="md" rounded="lg" p={5}>
              <Heading size="md">Project 1</Heading>
              <Text mt={2}>Description of Project 1.</Text>
            </Box>
            <Box bg="white" shadow="md" rounded="lg" p={5}>
              <Heading size="md">Project 2</Heading>
              <Text mt={2}>Description of Project 2.</Text>
            </Box>
            <Box bg="white" shadow="md" rounded="lg" p={5}>
              <Heading size="md">Project 3</Heading>
              <Text mt={2}>Description of Project 3.</Text>
            </Box>
            <Box bg="white" shadow="md" rounded="lg" p={5}>
              <Heading size="md">Project 4</Heading>
              <Text mt={2}>Description of Project 4.</Text>
            </Box>
            <Box bg="white" shadow="md" rounded="lg" p={5}>
              <Heading size="md">Project 5</Heading>
              <Text mt={2}>Description of Project 5.</Text>
            </Box>
          </SimpleGrid>
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