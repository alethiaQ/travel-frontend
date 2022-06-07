import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  HStack,
  Text,
  Link,
  Badge,
  useBreakpointValue,
  VStack,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import { StarIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import { Outlet, Link as ReactLink } from 'react-router-dom';
import SearchPageForm from '../components/searchpage-form';
const searchItem = {
  date: '10/14/2022',
  destination: 'Mumbai, India',
  from: 'Washington DC',
  airline: 'Qatar Airways',
};

const searchResults = [
  {
    date: '10/14/2022',
    destination: 'Washington, DC',
    from: 'Mumbai, India',
    airline: 'Emirates',
    pals: 2,
    flightNo: 'UA1800',
    fromAirport: 'BOM',
    desAirport: 'DCA',
    depart: '7:00am',
    arrival: '12:00am',
    rating: 4,
  },
  {
    date: '10/15/2022',
    destination: 'Washington, DC',
    from: 'Mumbai, India',
    airline: 'Qatar Airways',
    pals: 1,
    flightNo: 'OKL200',
    fromAirport: 'BOM',
    desAirport: 'DCA',
    depart: '4:00pm',
    arrival: '1:00pm',
    rating: 3,
  },
  {
    date: '10/14/2022',
    destination: 'Baltimore, Maryland',
    from: 'Mumbai, India',
    airline: 'Saudia Airways',
    pals: 5,
    flightNo: 'AC2605',
    fromAirport: 'BOM',
    desAirport: 'BWI',
    depart: '5:00am',
    arrival: '8:00pm',
    rating: 2,
  },
  {
    date: '10/15/2022',
    destination: 'Dulles, VA',
    from: 'Mumbai, India',
    airline: 'Qatar Airways',
    pals: 0,
    flightNo: 'SQ618',
    fromAirport: 'BOM',
    desAirport: 'IAD',
    depart: '9:00pm',
    arrival: '2:00am',
    rating: 5,
  },
  // {
  //   date: '10/14/2022',
  //   location: 'Mumbai, India',
  //   from: 'Washington DC',
  //   airline: 'Qatar Airways',
  // },
  // {
  //   date: '10/15/2022',
  //   location: 'Mumbai, India',
  //   from: 'Dulles, VA',
  //   airline: 'Qatar Airways',
  // },
  // {
  //   date: '10/14/2022',
  //   location: 'Mumbai, India',
  //   from: 'Washington DC',
  //   airline: 'Qatar Airways',
  // },
  // {
  //   date: '10/15/2022',
  //   location: 'Mumbai, India',
  //   from: 'Dulles, VA',
  //   airline: 'Qatar Airways',
  // },
];
export default function SearchPage({ props, ...rest }) {
  const location = useLocation();
  const { from, to, airline, date } = location.state;
  console.log(airline);
  return (
    <Flex
      className="searchContainer"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      // direction={{ base: 'column-reverse', md: 'row' }}
      wrap="wrap"
      minH="100vh"
      w={'full'}
      px={8}
      mb={16}
      bgGradient={'linear(to-b, blackAlpha.900, transparent)'}
      align={['center', 'center', 'flex-start', 'flex-start']}
      m="6 auto"
      {...rest}
    >
      <VStack margin="0 auto">
        <Box display="flex" alignItems="baseline">
          <SearchPageForm />
        </Box>
        <Grid
          h="700px"
          w="800px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          p={4}
        >
          <GridItem
            colSpan={5}
            bg="gray"
            borderWidth="1px"
            borderRadius="lg"
            h={140}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
              <Box p="4">
                <Box display="flex" alignItems="baseline">
                  <Box
                    color="white"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="sm"
                    textTransform="uppercase"
                    ml="2"
                    p="1"
                  >
                    Your Request
                  </Box>
                  <Button colorScheme="teal" size="xs">
                    <EditIcon />
                  </Button>
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  ml="2"
                >
                  {searchItem['date']}
                  <Box as="span" color="whiteAlpha.900" fontSize="sm">
                    {' '}
                    {searchItem.airline}
                  </Box>
                </Box>
                <Box ml="2" p="1">
                  <b>Destination: </b>
                  {searchItem.destination} <br />
                  <b>From:</b> {searchItem.from}
                </Box>
              </Box>

              <Box p="4" alignItems="center">
                <Stack direction={{ base: 'column', md: 'row' }}>
                  <Button colorScheme="green" ml="180">
                    Submit Request
                  </Button>
                </Stack>
              </Box>
            </SimpleGrid>
          </GridItem>
          {/* Map of Search results, each result = box, page by 4? */}
          {searchResults.map(item => {
            return (
              <GridItem
                colSpan={5}
                bg="gray.200"
                borderWidth="1px"
                borderRadius="lg"
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                  <Box p="4">
                    <Box display="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="1"
                        p="2"
                      >
                        {item.from}&bull; {item.destination}
                      </Box>
                      <Badge
                        borderRadius="full"
                        variant="outline"
                        px="2"
                        colorScheme="teal"
                      >
                        {item.flightNo}
                      </Badge>
                    </Box>
                    <Box
                      mt="1"
                      ml="2"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {item.fromAirport}
                    </Box>
                    <Box ml="2">
                      {item.depart}
                      <Box as="span" color="gray.600" fontSize="sm">
                        {' '}
                        departure
                      </Box>
                    </Box>
                    <Box display="flex" mt="2" alignItems="center" ml="2" p="1">
                      <b> {item.airline}</b>
                    </Box>
                  </Box>
                  <Box p="4">
                    <Box display="flex" alignItems="baseline">
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="1"
                        p="2"
                      >
                        {item.date}
                      </Box>
                      {/* <Stack spacing={2} direction="row"> */}
                      <Badge px="2px" colorScheme="teal">
                        {item.pals} pals
                      </Badge>
                      <Button
                        colorScheme="teal"
                        size="xs"
                        float="right"
                        ml="180"
                      >
                        <AddIcon />
                      </Button>
                      {/* </Stack> */}
                    </Box>
                    <Box
                      mt="1"
                      ml="2"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {item.desAirport}
                    </Box>
                    <Box ml="2">
                      {item.arrival}
                      <Box as="span" color="gray.600" fontSize="sm">
                        {' '}
                        arrival
                      </Box>
                    </Box>
                    <Box display="flex" mt="2" alignItems="center" ml="2" p="1">
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < item.rating ? 'teal.500' : 'gray.300'}
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        reviews
                      </Box>
                    </Box>
                  </Box>
                </SimpleGrid>
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
      <Box
        w={{ base: '50%', sm: '60%', md: '50%' }}
        mb={{ base: 12, md: 0 }}
        // maxW={620}
        maxW={720}
        // maxH={800}
        // maxH="60vh"
      >
        <Image
          src={'travelSpread.jpg'}
          size="50%"
          // h={600}
          rounded="2rem"
          shadow="2xl"
          display="block"
          marginTop={125}
        />
      </Box>
    </Flex>
  );
}
