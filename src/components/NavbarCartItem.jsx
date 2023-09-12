import {
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  IconButton,
  Icon,
  Box,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCarts,
  updateCartItemQuantity,
  removeCartItem,
} from '../app/features/cartSlice';
import { FaDollarSign } from 'react-icons/fa6';

function NavbarCartItem() {
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleIncrement = async (id, quantity) => {
    await dispatch(updateCartItemQuantity({ id, quantity: quantity + 1 }));
    dispatch(getCarts());
  };

  const handleDecrement = async (id, quantity) => {
    if (quantity > 1) {
      await dispatch(updateCartItemQuantity({ id, quantity: quantity - 1 }));
      dispatch(getCarts());
    }
  };

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  return carts.length > 0 ? (
    carts.map((cart) => (
      <HStack alignItems='flex-start' mb='4' shadow='sm' key={cart.id}>
        <Image
          src={cart.image}
          alt={cart.name}
          w='80px'
          h='80px'
          mt='1'
          objectFit='fill'
          borderRadius='lg'
        />
        <VStack alignItems='left' ml='1' w='66%'>
          <Heading size='sm' noOfLines='2'>
            {cart.name}
          </Heading>
          {cart.type === 'Free' ? (
            <Text>{cart.type}</Text>
          ) : (
            <HStack color='gray' spacing='1' mb='2'>
              <Icon as={FaDollarSign} />
              <Text>{cart.price}</Text>
            </HStack>
          )}
          <HStack justifyContent='space-between'>
            <HStack>
              <IconButton
                aria-label='Add more ticket'
                icon={<AddIcon />}
                size='xs'
                onClick={() => handleIncrement(cart.id, cart.quantity)}
              />
              <Text>{cart.quantity}</Text>
              <IconButton
                aria-label='Add more ticket'
                icon={<MinusIcon />}
                size='xs'
                onClick={() => handleDecrement(cart.id, cart.quantity)}
                isDisabled={cart.quantity === 1}
              />
            </HStack>
            <IconButton
              aria-label='Delete ticket'
              icon={<DeleteIcon />}
              size='xs'
              onClick={() => handleDelete(cart.id)}
            />
          </HStack>
        </VStack>
      </HStack>
    ))
  ) : (
    <Box p='20' borderRadius='lg' shadow='sm' textAlign='center'>
      <Text as='b'>Your cart is empty.</Text>
    </Box>
  );
}

export default NavbarCartItem;
