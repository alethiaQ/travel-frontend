import TopForm from '../components/MainPageTopForm';
import StatsCard from '../components/StatBoxes';
import {
  Stack,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Heading,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
function Home() {
  return (
    <VStack
      w={'full'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-b, blackAlpha.900, transparent)'}
    >
      <TopForm />
      <Stack
        maxW={'2xl'}
        align="center"
        spacing={12}
        position="absolute"
        top={200}
      >
        <Heading
          color={'white'}
          //   fontWeight={400}
          lineHeight={1.2}
          noOfLines={1}
          //   fontSize={'xx-large'}
          size="2xl"
        >
          Let Your Journey Begin Now...
        </Heading>
        {/* <Stack direction={'row'}> */}
        <Link as={ReactLink} to="/search">
          <Button
            variant="outline"
            bg={'transparent'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}
            size="lg"
          >
            I'm Flexible
          </Button>
        </Link>

        {/* </Stack> */}
        <StatsCard />
      </Stack>
    </VStack>
  );
}

export default Home;
