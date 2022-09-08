import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import React from 'react';
// import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default class RequestForm extends React.Component {
  // const [showPassword, setShowPassword] = useState(false);
  state = this.props.item;
  handleInputChange = event => {
    // console.log(this.state);
    this.state[event.target.name] = event.target.value;
    // console.log(event.target.value);
    let obj = { [event.target.name]: event.target.value };
    // console.log(obj);
    this.props.onFormChange(obj);
  };
  render() {
    return (
      <Flex
        //   minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Create an Entry
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to find and be found by fellow travelers 🗺
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      value={this.state.name}
                      name="Name"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      value={this.state.lastName}
                      name="LastName"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={this.state.email}
                  name="Email"
                  onChange={event => this.handleInputChange(event)}
                />
              </FormControl>
              <HStack>
                <Box>
                  <FormControl id="to" isRequired>
                    <FormLabel>To</FormLabel>
                    <Input
                      type="text"
                      value={this.state.To}
                      name="To"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="from" isRequired>
                    <FormLabel>From</FormLabel>
                    <Input
                      type="text"
                      value={this.state.From}
                      name="From"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="language" isRequired>
                    <FormLabel>Language</FormLabel>
                    <Input
                      type="text"
                      value={this.state.language}
                      name="Language"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="airline" isRequired>
                    <FormLabel>Airline</FormLabel>
                    <Input
                      type="text"
                      value={this.state.airline}
                      name="airline"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="age">
                    <FormLabel>Age</FormLabel>
                    <Input
                      type="text"
                      value={this.state.age}
                      name="Age"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="gender">
                    <FormLabel>Gender</FormLabel>
                    <Input
                      type="text"
                      value={this.state.gender}
                      name="Gender"
                      onChange={event => this.handleInputChange(event)}
                    />
                  </FormControl>
                </Box>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}
