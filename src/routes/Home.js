import TopForm from '../components/top-form';
import StatsCard from '../components/stat-boxes';
import {
  Stack,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
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
        <Link as={ReactLink} to="/search">
          <Button
            variant="outline"
            bg={'transparent'}
            rounded={'full'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}
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
