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
import CartItem from './CartItem';

function CartNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const isAuthenticated = JSON.parse(localStorage.getItem('onAuth'));

  return (
    <>
      <IconButton
        aria-label='Cart'
        icon={<FaCartShopping />}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerBody>
            <CartItem />
            <CartItem />
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

export default CartNavbar;
