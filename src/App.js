import React from 'react';
import { ChakraProvider, Flex, position } from '@chakra-ui/react';
import Home from './routes/Home';
import FooterComponent from './components/footer';
import Nav from './components/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import theme from './theme';
import SearchPageContainer from './routes/SearchPageContainer';
// transBlack: "rgba(0, 0, 0, 0.2)"
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Flex
        w={'full'}
        minH={'100vh'}
        backgroundImage={'url(background.jpg)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPageContainer />} />
        </Routes>
        <Outlet />
        {/* </Router> */}
      </Flex>
      {/* <FooterComponent /> */}
    </ChakraProvider>
  );
}

export default App;
