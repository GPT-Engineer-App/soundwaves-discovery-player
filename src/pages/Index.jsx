import { Box, Container, Flex, Heading, IconButton, Image, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaMusic, FaSearch, FaCog, FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        {/* Header */}
        <Box as="header" bg="gray.100" p={4} shadow="sm" position="fixed" top={0} left={0} right={0} zIndex={1}>
          <Flex justify="space-between" align="center">
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb3VuZHdhdmVzJTIwbG9nb3xlbnwwfHx8fDE3MTU0NDY0NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="SoundWaves Logo" h="8" />
            <Flex gap={6}>
              <Link href="#" color="black" fontWeight="bold">
                <FaHome /> Home
              </Link>
              <Link href="#" color="gray.600">
                <FaMusic /> Browse
              </Link>
              <Link href="#" color="gray.600">
                Your Library
              </Link>
              <Link href="#" color="gray.600">
                <FaCog /> Settings
              </Link>
            </Flex>
          </Flex>
        </Box>

        {/* Main Content */}
        <VStack spacing={4} mt="20" p={4} align="stretch">
          <Input placeholder="Search music, artists, albums..." size="lg" variant="filled" icon={<FaSearch />} />
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>
                Your Library
              </Heading>
              <SimpleGrid columns={2} spacing={4}>
                <Box bg="gray.200" p={4} borderRadius="md">
                  Playlist 1
                </Box>
                <Box bg="gray.200" p={4} borderRadius="md">
                  Playlist 2
                </Box>
              </SimpleGrid>
            </Box>
            <Box>
              <Heading size="md" mb={4}>
                Recommended
              </Heading>
              <SimpleGrid columns={1} spacing={4}>
                <Box bg="gray.200" p={4} borderRadius="md">
                  Song 1
                </Box>
                <Box bg="gray.200" p={4} borderRadius="md">
                  Song 2
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Music Playback Controls */}
        <Box as="footer" bg="gray.100" p={4} shadow="sm" position="fixed" bottom={0} left={0} right={0}>
          <Flex justify="center" align="center" gap={4}>
            <IconButton aria-label="Previous" icon={<FaStepBackward />} />
            <IconButton aria-label="Play" icon={<FaPlay />} colorScheme="blue" />
            <IconButton aria-label="Pause" icon={<FaPause />} colorScheme="blue" />
            <IconButton aria-label="Next" icon={<FaStepForward />} />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
