import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Badge,
  VStack,
  Grid,
  GridItem,
  Input,
  SimpleGrid,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import { withRouter } from 'react-router-dom';
// import { useDisclosure } from '@chakra-ui/react';
import { StarIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
// import { useLocation } from 'react-router-dom';
import { Outlet, Link as ReactLink } from 'react-router-dom';
import SearchPageForm from '../components/searchpage-form';
import ItemDetail from '../components/ItemDetail';
import { render } from '@testing-library/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(SearchPage) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <SearchPage
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}
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
    age: '45',
    language: 'English',
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
    age: '45',
    language: 'English',
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
    age: '45',
    language: 'English',
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
    age: '45',
    language: 'English',
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

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailItemPicked: false,
      item: null,
      requestItems: '',
      requestGroupModal: false,
      userInputModal: false,
      requestData: props.location.state,
    };
  }
  handleInputChange = event => {
    console.log(event);
  };

  componentDidMount() {
    console.log(this.state.requestData);
    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: this.state.requestData,
    };
    fetch(
      'https://8ck0yps8rj.execute-api.us-west-2.amazonaws.com/dev/request',
      requestOptions
    )
      .then(res => {
        console.log(res);
        this.setState({ requestOptions: res });
        console.log(this.state);
      })
      .then(
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  handleClick = (event, item) => {
    this.setState({ detailItemPicked: true, item: item });
  };
  openUserModal = () => {
    this.setState({ userInputModal: true });
  };
  openRequestModal = () => {
    this.setState({ requestGroupModal: true });
  };
  onCloseUserModal = () => {
    this.setState({ userInputModal: false });
  };
  onCloseRequestModal = () => {
    this.setState({ requestGroupModal: false });
  };
  render() {
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
        // {...rest}
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
            {/* User Input box */}
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
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">Date</Flex>
                    <Editable
                      defaultValue={searchItem.date}
                      isPreviewFocusable={true}
                      selectAllOnFocus={false}
                      onChange={this.handleInputChange}
                    >
                      <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                          background: 'gray.700',
                        }}
                      />
                      <Input py={2} px={4} as={EditableInput} />
                    </Editable>
                  </HStack>
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">Destination</Flex>
                    <Editable
                      defaultValue={searchItem.destination}
                      isPreviewFocusable={true}
                      selectAllOnFocus={false}
                    >
                      <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                          background: 'gray.700',
                        }}
                      />
                      <Input py={2} px={4} as={EditableInput} />
                    </Editable>
                  </HStack>
                </Box>

                <Box p="2" alignItems="center">
                  <Stack direction={{ base: 'column', md: 'row' }}>
                    <Button
                      colorScheme="green"
                      ml="180"
                      onClick={this.openUserModal}
                    >
                      Submit Request
                    </Button>
                  </Stack>
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">From</Flex>
                    <Editable
                      defaultValue={searchItem.from}
                      isPreviewFocusable={true}
                      selectAllOnFocus={false}
                    >
                      <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                          background: 'gray.700',
                        }}
                      />
                      <Input py={2} px={4} as={EditableInput} />
                    </Editable>
                  </HStack>
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">Airline</Flex>
                    <Editable
                      defaultValue={searchItem.airline}
                      isPreviewFocusable={true}
                      selectAllOnFocus={false}
                    >
                      <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                          background: 'gray.700',
                        }}
                      />
                      <Input py={2} px={4} as={EditableInput} />
                    </Editable>
                  </HStack>
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
                  onClick={e => this.handleClick(e, item)}
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
                          {item.from}- {item.destination}
                        </Box>
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
                      <Box display="flex" mt="2" alignItems="center" p="1">
                        <b>{item.airline}</b>
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
                          onClick={this.openRequestModal}
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
          display="block"
          marginTop={50}
          // maxH={800}
          // maxH="60vh"
        >
          {this.state.detailItemPicked ? (
            <ItemDetail item={this.state.item} />
          ) : (
            <Image
              src={'travelSpread.jpg'}
              rounded="2rem"
              shadow="2xl"
              display="block"
              marginTop={125}
              size="50%"
            />
          )}
          {/* {!this.state.detailItemPicked && (
    
          )} */}
        </Box>
        {/* user Modal */}
        <Modal
          isCentered
          onClose={this.onCloseUserModal}
          isOpen={this.state.userInputModal}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Request</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Hey girl Hey
              {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="teal"
                variant="outline"
                mr={3}
                onClick={this.onCloseUserModal}
              >
                Close
              </Button>
              <Button colorScheme="teal" mr={3} onClick={this.onCloseUserModal}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isCentered
          onClose={this.onCloseRequestModal}
          isOpen={this.state.requestGroupModal}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Request to Join Group</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Hey girl Hey
              {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="teal"
                variant="outline"
                mr={3}
                onClick={this.onCloseRequestModal}
              >
                Close
              </Button>
              <Button
                colorScheme="teal"
                mr={3}
                onClick={this.onCloseRequestModal}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    );
  }
}
export default withRouter(SearchPage);
