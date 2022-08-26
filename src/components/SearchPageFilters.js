import {
  HStack,
  Select,
  FormControl,
  StackDivider,
  Link,
  Button,
  Input,
} from '@chakra-ui/react';
import { Component } from 'react';
import { Link as ReactLink } from 'react-router-dom';
const langs = require('./../languages.json');

export default class SearchPageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      age: '',
      gender: '',
      palAmount: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const languages = langs;
    // console.log(languages.map(lang => lang.name));
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
          position="absolute"
          top={8}
          left={530}
        >
          {/* <Box bg="white" color="black"> */}
          <FormControl id="language" ml={1}>
            <Select
              placeholder="Language"
              size="md"
              variant="outline"
              name="language"
              fontSize="md"
              value={this.state.language}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
              width="40"
            >
              {langs.map(lang => {
                return (
                  <option value={lang.name} width="40">
                    {lang.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          {/* </Box> */}
          {/* <Box bg="white" color="black"> */}
          <FormControl id="date">
            <Input
              size="md"
              variant="outline"
              name="age"
              value={this.state.age}
              onChange={this.handleOnChange}
              type="search"
              placeholder="Age"
              _placeholder={{ color: 'black' }}
              bg="whiteAlpha"
              // _placeholder={{ color: 'grey' }}
            />
          </FormControl>
          <FormControl id="gender">
            <Select
              placeholder="Gender"
              size="md"
              variant="outline"
              name="gender"
              value={this.state.gender}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="female" key="female">
                Female
              </option>
              <option value="male" key="male">
                Male
              </option>
              <option value="any" key="any">
                Any
              </option>
            </Select>
          </FormControl>
          <FormControl id="size">
            <Select
              placeholder="Pal Size"
              size="md"
              variant="outline"
              name="time"
              value={this.state.palAmount}
              onChange={this.handleOnChange}
              _placeholder={{ color: 'whiteAlpha' }}
              bg="whiteAlpha"
            >
              <option value="1-3" key="1">
                1-3
              </option>
              <option value="3-5" key="2">
                3-5
              </option>
              <option value="5+" key="3">
                5+
              </option>
            </Select>
          </FormControl>

          <Link as={ReactLink} to="/search">
            <Button
              size="md"
              type="submit"
              onSubmit={this.handleSubmit}
              aria-label="Filter database"
              colorScheme="teal"
              // variant="outline"
            >
              Filter
            </Button>
          </Link>
        </HStack>
      </form>
    );
  }
}
