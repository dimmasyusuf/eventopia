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
  useToast,
} from '@chakra-ui/react';
import { FaCartShopping } from 'react-icons/fa6';
import NavbarCartItem from './NavbarCartItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCarts,
  checkoutCarts,
  removeCartItem,
} from '../app/features/cartSlice';
import { useEffect, useState } from 'react';

function NavbarCart() {
  const [loadingState, setLoadingState] = useState(false);
  const carts = useSelector((state) => state.cart.carts);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const isAuthenticated = JSON.parse(localStorage.getItem('onAuth'));

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  const totalPrice = carts.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const deleteAllCarts = () => {
    const cartsId = carts.map((cart) => cart.id);
    cartsId.forEach((id) => dispatch(removeCartItem(id)));
  };

  const handleCheckout = () => {
    if (isAuthenticated === null) {
      toast({
        title: 'Login',
        description: 'Please login to check out',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } else if (isAuthenticated === true) {
      setLoadingState(true);
      dispatch(checkoutCarts({ ...carts, totalPrice }));
      deleteAllCarts();
      setTimeout(() => {
        setLoadingState(false);
      }, 1000);
    }
  };

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
          </DrawerBody>
          <DrawerFooter>
            <VStack width='100%'>
              <HStack justifyContent='space-between' w='100%'>
                <Text as='b'>Total:</Text>
                <Text as='b'>${totalPrice.toFixed(2)}</Text>
              </HStack>
              <Button
                colorScheme='orange'
                w='100%'
                onClick={handleCheckout}
                isLoading={loadingState}
                loadingText='Checking out'
                isDisabled={carts.length === 0}
              >
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
