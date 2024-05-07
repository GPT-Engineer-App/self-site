import { Box, Flex, Heading, Text, VStack, Link, Container, SimpleGrid, Image, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaAdjust } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 3); // Cycle through 0, 1, 2
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container maxW="container.xl" p={0}>
      <Slider defaultValue={30} min={0} max={100} step={10}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="tomato" as={FaAdjust} />
        </SliderThumb>
      </Slider>
      <Flex justify="center" align="center" overflow="hidden" pos="relative" w="full" h="500px">
        <Image src="images/monkey1.jpg" alt="Monkey 1" boxSize="full" objectFit="cover" display={activeIndex === 0 ? 'block' : 'none'} />
      <Image src="images/monkey2.jpg" alt="Monkey 2" boxSize="full" objectFit="cover" display={activeIndex === 1 ? 'block' : 'none'} />
      <Image src="images/monkey3.jpg" alt="Monkey 3" boxSize="full" objectFit="cover" display={activeIndex === 2 ? 'block' : 'none'} />
      </Flex>
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