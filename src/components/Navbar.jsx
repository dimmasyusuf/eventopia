import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NavbarCart from './NavbarCart';
import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';

function Navbar() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex py='4' px='6' justifyContent='space-between'>
      <NavbarMenuMobile />
      <Heading
        as={RouterLink}
        fontWeight='bold'
        fontSize='2xl'
        cursor='pointer'
        to='/'
      >
        Eventopia
      </Heading>
      {isSmallScreen ? <NavbarCart /> : <NavbarMenu />}
    </Flex>
  );
}

export default Navbar;
