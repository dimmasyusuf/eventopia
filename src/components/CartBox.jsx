import {
  Box,
  HStack,
  VStack,
  Text,
  IconButton,
  Button,
  Icon,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FaDollarSign } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { postCart } from '../app/features/cartSlice';

function CartBox() {
  const { event } = useSelector((state) => state.events);
  const [name, setName] = useState(event.name);
  const [price, setPrice] = useState(event.price);
  const [type, setType] = useState(event.type);
  const [quantity, setQuantity] = useState(1);
  const [loadingState, setLoadingState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(event.name);
    setPrice(event.price);
    setType(event.type);
  }, [event]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingState(true);
    dispatch(postCart({ name, type, price, quantity }));
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box borderWidth='1px' borderRadius='lg' w='100%' p='6'>
        <HStack
          mb='6'
          borderWidth='2px'
          p='6'
          borderColor='blue'
          borderRadius='lg'
          alignItems='flex-start'
          justifyContent='space-between'
        >
          <VStack alignItems='left'>
            <Text as='b' noOfLines='2' mb='2'>
              {name}
            </Text>
            {type === 'Free' ? (
              <Text>{type}</Text>
            ) : (
              <HStack color='gray' spacing='1' mb='2'>
                <Icon as={FaDollarSign} />
                <Text>{price}</Text>
              </HStack>
            )}
          </VStack>
          <HStack spacing={{ base: '4', lg: '2' }}>
            <IconButton
              size='sm'
              aria-label='Add tickets'
              icon={<AddIcon />}
              value={quantity}
              onClick={() => setQuantity(quantity + 1)}
            />
            <Text as='b'>{quantity}</Text>
            <IconButton
              size='sm'
              aria-label='Remove tickets'
              icon={<MinusIcon />}
              value={quantity}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            />
          </HStack>
        </HStack>
        <Button
          type='submit'
          colorScheme='orange'
          width='100%'
          isLoading={loadingState}
          loadingText='Reserving a spot'
        >
          Reserve a spot
        </Button>
      </Box>
    </form>
  );
}

export default CartBox;
