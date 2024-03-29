import TopForm from '../components/MainPageTopForm';
import StatsCard from '../components/StatBoxes';
import {
  Stack,
  Button,
  Grid,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import SearchPageContainer from './SearchPageContainer';
function Home() {
  return (
    <VStack
      w={'full'}
      justify={'center'}
      alignItems="center"
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-b, blackAlpha.900, transparent)'}
    >
      {/* <Flex justify={'top'}> */}
      <TopForm />
      {/* </Flex> */}

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
        {/* {formFilled = true ? <StatsCard /> : <SearchPageContainer /> } */}
        <StatsCard />
      </Stack>
    </VStack>
  );
}

export default Home;
