// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  Text,
  Center,
  HStack,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { MdFlightTakeoff } from 'react-icons/md';

// transBlack: "rgba(0, 0, 0, 0.2)"
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
    as={ReactLink}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg="black" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack color="white">
            <Icon as={MdFlightTakeoff} color="white" />
            <Text fontSize="xl">Travel Pal</Text>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    // src={'https://avatars.dicebear.com/api/male/username.svg'}
                  >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </MenuButton>
                {/* INSIDE USER BOX */}
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'sm'}
                      // src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link as={ReactLink} to="/profile">
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={ReactLink} to="/account-settings">
                      Account Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link as={ReactLink} to="/logout">
                      Logout
                    </Link>
                  </MenuItem>
                </MenuList>
                {/* END USER BOX */}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
