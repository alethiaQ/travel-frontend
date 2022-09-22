import { Box, Button, Badge, GridItem, SimpleGrid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { AddIcon } from '@chakra-ui/icons';
export function TravelGroupCards() {
  const items = useSelector(state => state.responseItems);
  const itemsMap = items.map(item => {
    return (
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
          </Box>
        </Box>
      </SimpleGrid>
    );
  });

  return (
    <div>
      <GridItem colSpan={5} bg="gray.200" borderWidth="1px" borderRadius="lg">
        {itemsMap}
      </GridItem>
    </div>
  );
}
