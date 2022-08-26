import React from 'react';
// import { Container, Image } from 'semantic-ui-react';
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Text,
  Heading,
  Highlight,
  TableCaption,
} from '@chakra-ui/react';

const ItemDetail = item => {
  console.log(item);
  const listItemInfo = Object.keys(item.item).map((element, index) => (
    <Tr key={index}>
      <Td>
        <Text fontSize="lg">
          {/* <Highlight
            query={element}
            styles={{ px: '1', py: '1', bg: 'orange.100' }}
          > */}
          {element}
          {/* </Highlight> */}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md">{item.item[element]}</Text>
      </Td>
    </Tr>
  ));
  return (
    <div>
      <div>
        <TableContainer bg="gray.200" borderWidth="1px" borderRadius="lg">
          <Table variant="simple" size="md">
            <TableCaption>Submit Request for further information</TableCaption>
            <Thead>
              <Tr>
                <Th>
                  <Heading size="xl">Group {item.item.rating}</Heading>
                </Th>

                <Th>{''}</Th>
              </Tr>
            </Thead>
            <Tbody>{listItemInfo}</Tbody>
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default ItemDetail;
