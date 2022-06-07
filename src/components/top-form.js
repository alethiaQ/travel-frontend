import {
  Box,
  Input,
  IconButton,
  HStack,
  Flex,
  FormControl,
  StackDivider,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
// const navigate = useNavigate();
export default class TopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      from: '',
      date: '',
      airline: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFromAutoChange = this.handleFromAutoChange.bind(this);
    this.handleToAutoChange = this.handleToAutoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  countries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'United States Minor Outlying Islands',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cabo Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo (Democratic Republic of the)',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    "Côte d'Ivoire",
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia (the former Yugoslav Republic of)',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    "Korea (Democratic People's Republic of)",
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of Kosovo',
    'Réunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'Korea (Republic of)',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleToAutoChange(country) {
    this.setState({ to: country });
  }
  handleFromAutoChange(country) {
    this.setState({ from: country });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    this.setState({
      to: '',
      from: '',
      date: '',
      airline: '',
    });
    // navigate('../search', { replace: true });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <Flex
          alignItems="center"
          justifySelf="center"
          p="2"
          rounded="full"
          boxShadow="md"
          m="4"
          borderRadius="30px"
          bg="white"
          w="40%"
          h="6%"
          position="absolute"
          top={10}
          left={498}
        >
          <HStack
            divider={<StackDivider borderColor="gray.200" />}
            align="center"
            justify="center"
          >
            <Box bg="white" color="black">
              <FormControl id="from" ml={1}>
                <AutoComplete
                  openOnFocus
                  onChange={values => this.handleFromAutoChange(values)}
                  name="from"
                >
                  <AutoCompleteInput
                    size="sm"
                    variant="flushed"
                    type="search"
                    placeholder="From..."
                    _placeholder={{ color: 'grey' }}
                  />
                  <AutoCompleteList
                    size="xs"
                    w="100%"
                    value={this.state.from}
                    name="from"
                  >
                    {this.countries.map((country, cid) => (
                      <AutoCompleteItem
                        size="xs"
                        fontSize="xs"
                        key={`option-${cid}`}
                        value={country}
                        textTransform="capitalize"
                      >
                        {country}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Box>
            <Box bg="white" color="black">
              <FormControl id="To" isRequired>
                <AutoComplete
                  openOnFocus
                  onChange={values => this.handleToAutoChange(values)}
                  name="to"
                >
                  <AutoCompleteInput
                    size="sm"
                    variant="flushed"
                    type="search"
                    placeholder="To..."
                    _placeholder={{ color: 'grey' }}
                  />
                  <AutoCompleteList
                    size="xs"
                    w="100%"
                    name="to"
                    value={this.state.to}
                    onChange={this.handleOnChange}
                  >
                    {this.countries.map((country, cid) => (
                      <AutoCompleteItem
                        size="xs"
                        fontSize="xs"
                        key={`option-${cid}`}
                        value={country}
                        textTransform="capitalize"
                      >
                        {country}
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>
            </Box>
            <Box bg="white" color="black">
              <FormControl id="date">
                <Input
                  size="sm"
                  variant="flushed"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleOnChange}
                  type="search"
                  placeholder="Date.."
                  _placeholder={{ color: 'grey' }}
                />
              </FormControl>
            </Box>
            <Box bg="white" color="black">
              <FormControl id="airline">
                <Input
                  size="sm"
                  variant="flushed"
                  name="airline"
                  value={this.state.airline}
                  onChange={this.handleOnChange}
                  type="search"
                  placeholder="Airline"
                  _placeholder={{ color: 'grey' }}
                />
              </FormControl>
            </Box>
            <Link
              to="/search"
              state={{
                to: 'to',
                from: this.state.from,
                airline: this.state.airline,
                date: this.state.date,
              }}
            >
              <IconButton
                size="md"
                type="submit"
                onSubmit={this.handleSubmit}
                aria-label="Search database"
                isRound="true"
                icon={<SearchIcon />}
                color="white"
                bg="black"
              >
                {' '}
                {/* <Navigate to="/search" replace={true} /> */}
              </IconButton>
            </Link>
          </HStack>
        </Flex>
      </form>
    );
  }
}
