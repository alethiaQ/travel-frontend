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
  TableCaption,
} from '@chakra-ui/react';

const ItemDetail = item => {
  //   console.log(item);
  const listItemInfo = Object.keys(item.item).map((element, index) => (
    <Tr key={index}>
      <Td>
        <strong>{element}</strong>
      </Td>
      <Td>{item.item[element]}</Td>
    </Tr>
  ));
  return (
    <div>
      <div>
        <TableContainer bg="gray.200">
          <Table variant="simple" size="md">
            <TableCaption>Submit request for further information</TableCaption>
            <Thead>
              <Tr>
                <Th>Categories</Th>
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
