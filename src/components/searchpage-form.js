import {
  HStack,
  Select,
  FormControl,
  StackDivider,
  Link,
  Button,
} from '@chakra-ui/react';
import { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default class SearchPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      age: '',
      gender: '',
      time: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      language: '',
      age: '',
      gender: '',
      time: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <HStack
          divider={<StackDivider borderColor="gray.200" />}
          align="center"
          justify="center"
        >
          {/* <Box bg="white" color="black"> */}
          <FormControl id="language" ml={1}>
            <Select
              placeholder="Language"
              size="md"
              variant="outline"
              name="language"
              value={this.state.language}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          {/* </Box> */}
          {/* <Box bg="white" color="black"> */}
          <FormControl id="age" isRequired>
            <Select
              placeholder="Age"
              size="md"
              variant="outline"
              name="age"
              value={this.state.age}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl id="gender">
            <Select
              placeholder="Gender"
              size="md"
              variant="outline"
              name="gender"
              value={this.state.gender4}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl id="time">
            <Select
              placeholder="Time"
              size="md"
              variant="outline"
              name="time"
              value={this.state.time}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <Link as={ReactLink} to="/search">
            <Button
              size="md"
              type="submit"
              onSubmit={this.handleSubmit}
              aria-label="Filter database"
              colorScheme="teal"
              variant="outline"
            >
              Filter
            </Button>
          </Link>
        </HStack>
      </form>
    );
  }
}
