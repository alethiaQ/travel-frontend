import React from 'react';
import {
  ChakraProvider,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  theme,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FooterComponent from './components/footer';
import JoinOurTeam from './components/top-form';
import Nav from './components/Nav';
import StatsCard from './components/stat-boxes';
// transBlack: "rgba(0, 0, 0, 0.2)"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Flex
        w={'full'}
        h={'80vh'}
        backgroundImage={'url(background.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-b, blackAlpha.900, transparent)'}
        >
          <JoinOurTeam />
          <Stack
            maxW={'2xl'}
            align="center"
            spacing={6}
            position="absolute"
            top={180}
          >
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={'xx-large'}
            >
              Let Your Journey Begin Now...
            </Text>
            {/* <Stack direction={'row'}> */}
            <Button
              variant="outline"
              bg={'transparent'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              I'm Flexible
            </Button>
            {/* </Stack> */}
            <StatsCard />
          </Stack>
        </VStack>
      </Flex>
      <FooterComponent />
    </ChakraProvider>
  );
}

export default App;
