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
import { RepeatIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
// import { useLocation } from 'react-router-dom';
import { Outlet, Link as ReactLink } from 'react-router-dom';
import SearchPageForm from '../components/SearchPageFilters';
import RequestForm from '../components/UserRequestForm';
import ItemDetail from '../components/ItemDetail';
import { render } from '@testing-library/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GroupRequestForm from '../components/GroupRequestForm';

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

let searchResults = [
  {
    Name: 'Xioaxi',
    To: 'MurderLand',
    From: 'Reston',
    Date: '10/14/2022',
    Airline: 'Qatar',
    Language: 'English',
    Pals: '1',
  },
  {
    Name: 'Xioaxi',
    To: 'MurderLand',
    From: 'Reston',
    Date: '10/14/2022',
    Airline: 'Qatar',
    Language: 'English',
    Pals: '1',
  },
  {
    Name: 'Xioaxi',
    To: 'MurderLand',
    From: 'Reston',
    Date: '10/14/2022',
    Airline: 'Qatar',
    Language: 'English',
    Pals: '1',
  },
  // {
  //   date: '10/14/2022',
  //   destination: 'Washington, DC',
  //   from: 'Mumbai, India',
  //   airline: 'Emirates',
  //   pals: 2,
  //   flightNo: 'UA1800',
  //   fromAirport: 'BOM',
  //   desAirport: 'DCA',
  //   depart: '7:00am',
  //   arrival: '12:00am',
  //   rating: 4,
  //   age: '45',
  //   language: 'English',
  // },
];
const exampleBody = {
  statusCode: 200,
  result: [{ Name: 'Xiaoxi', From: 'Murderland', To: 'Prison' }],
};
class SearchPage extends React.Component {
  respItems = [];
  constructor(props) {
    super(props);
    this.state = {
      detailItemPicked: false,
      item: null,
      requestItems: '',
      requestGroupModal: false,
      userInputModal: false,
      requestData: props.location.state,
      responseItems: searchResults,
    };
  }

  componentDidMount() {
    this.getRequest(this.state.requestData);
  }
  getRequest(requestedInfo) {
    console.log(requestedInfo);
    let params = '';
    for (const key in requestedInfo) {
      requestedInfo[key]
        ? (params += `${key}=${requestedInfo[key]}`)
        : (params = params);
    }
    console.log(params.replace(/\s/g, ''));
    params.replace(/\s/g, '');
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    //   mode: 'no-cors',
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://8ck0yps8rj.execute-api.us-west-2.amazonaws.com/dev/request?${params}`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))

      // return result['errorMessage']
      //   ? null
      //   :

      .catch(error => console.log('error', error));
    // console.log(this.state.responseItems);
  }
  submitRequestForm = event => {
    event.preventDefault();
    return this.postUserRequest();
  };
  postUserRequest() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(this.state.requestData),
      redirect: 'follow',
    };

    fetch(
      'https://8ck0yps8rj.execute-api.us-west-2.amazonaws.com/dev/request',
      requestOptions
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    this.onCloseUserModal();
  }
  handleRequestFormChange = obj => {
    console.log(Object.values(obj)[0]);
    // console.log(obj.key);
    // console.log(obj.value);
    const name = Object.keys(obj)[0];
    const value = Object.values(obj)[0];
    this.setState(state => {
      return (
        {
          requestData: {
            [name]: value,
            ...state.requestData,
          },
        },
        () => {
          console.log(this.state.requestData);
        }
      );
    });
    console.log(this.state.requestData);
  };
  handleInputChange = event => {
    // console.log(event);
    // console.log(event.value);
    const name = event.name;
    const val = event.value;
    this.setState(
      {
        requestData: {
          [name]: val,
          ...this.state.requestData,
        },
      },
      () => {
        console.log(this.state.requestData);
      }
    );
  };
  handleEditSubmission = event => {
    console.log(this.state.requestData);
  };
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
                    <Button
                      colorScheme="teal"
                      size="xs"
                      onClick={e => this.handleEditSubmission(e)}
                    >
                      <RepeatIcon />
                    </Button>
                  </Box>
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">Date</Flex>
                    <Editable
                      defaultValue={this.state.requestData.Date}
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
                      <Input
                        py={2}
                        px={4}
                        as={EditableInput}
                        value={this.state.requestData.date}
                        name="Date"
                        onChange={event => this.handleInputChange(event.target)}
                      />
                    </Editable>
                  </HStack>
                  <HStack lineHeight="tight" ml="2">
                    <Flex fontWeight="semibold">Destination</Flex>
                    <Editable
                      defaultValue={this.state.requestData.To}
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
                      defaultValue={this.state.requestData.From}
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
                      defaultValue={this.state.requestData.Airline}
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
            {this.respItems.map(item => {
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
                      {Object.keys(item).map(key => {
                        return (
                          <Box ml="2">
                            {item[key]}
                            <Box as="span" color="gray.600" fontSize="sm">
                              {' '}
                              {key}
                            </Box>
                          </Box>
                        );
                      })}
                      {/* <Box display="flex" alignItems="baseline">
                            <Box
                              color="gray.500"
                              fontWeight="semibold"
                              letterSpacing="wide"
                              fontSize="xs"
                              textTransform="uppercase"
                              ml="1"
                              p="2"
                            >
                              {item.From}- {item.To}
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
                            {item.Name}
                            <Box as="span" color="gray.600" fontSize="sm">
                              {' '}
                              name
                            </Box>
                          </Box>
                          <Box ml="2">
                            {item.depart}
                            <Box as="span" color="gray.600" fontSize="sm">
                              {' '}
                              departure
                            </Box>
                          </Box>
                          <Box display="flex" mt="2" alignItems="center" p="1">
                            <b>{item.Airline}</b>
                          </Box> */}
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
                          {item.Date}
                        </Box>
                        {/* <Stack spacing={2} direction="row"> */}
                        <Badge px="2px" colorScheme="teal">
                          {item.Pals} pals
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
                      {/* <Box
                            mt="1"
                            ml="2"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            noOfLines={1}
                          ></Box> */}
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
        {/* USER INPUT REQUEST MODAL */}
        <Modal
          isCentered
          onClose={this.onCloseUserModal}
          isOpen={this.state.userInputModal}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>User Request</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <RequestForm
                onFormChange={this.handleRequestFormChange}
                item={this.state.requestData}
              />
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
              <Button
                colorScheme="teal"
                mr={3}
                type="submit"
                onClick={this.submitRequestForm}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* PAL GROUP REQUEST MODAL */}
        <Modal
          isCentered
          onClose={this.onCloseRequestModal}
          isOpen={this.state.requestGroupModal}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <GroupRequestForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    );
  }
}
export default withRouter(SearchPage);
