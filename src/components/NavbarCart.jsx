import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaCartShopping } from 'react-icons/fa6';
import NavbarCartItem from './NavbarCartItem';

function NavbarCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label='Cart Button'
        icon={<FaCartShopping />}
        onClick={onOpen}
        bg={{ base: 'gray.100', md: 'white' }}
        color='black'
        _hover={{ background: 'gray.200' }}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerBody>
            <NavbarCartItem />
            <NavbarCartItem />
          </DrawerBody>
          <DrawerFooter>
            <VStack width='100%'>
              <HStack justifyContent='space-between' w='100%'>
                <Text as='b'>Total:</Text>
                <Text as='b'>$0</Text>
              </HStack>
              <Button colorScheme='orange' w='100%'>
                Checkout
              </Button>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarCart;
