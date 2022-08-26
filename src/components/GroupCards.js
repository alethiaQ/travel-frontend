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
import { RepeatIcon, AddIcon, EditIcon } from '@chakra-ui/icons';
import GroupRequestForm from './GroupRequestForm';

const GroupCards = searchResults => {
  console.log(searchResults);
  let requestGroupModal = false;
  const results = searchResults.searchResults;
  function openRequestModal() {
    requestGroupModal = true;
  }
  function onCloseRequestModal() {
    requestGroupModal = false;
  }
  return (
    <div>
      {results.map(item => {
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
                    onClick={openRequestModal}
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

      {/* PAL GROUP REQUEST MODAL */}
      <Modal
        isCentered
        onClose={onCloseRequestModal}
        isOpen={requestGroupModal}
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
    </div>
  );
};
export default GroupCards;
