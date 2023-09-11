import {
  HStack,
  VStack,
  Heading,
  Text,
  Image,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function NavbarCartItem() {
  const [count, setCount] = useState(1);
  return (
    <HStack alignItems='flex-start' mb='2' shadow='sm'>
      <Box display='flex' justifyContent='center' pt='1' w='115px' h='103px'>
        <Image
          src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F572639029%2F121703163141%2F1%2Foriginal.20230810-130341?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=eaac9a819fbdcb319811a98893079353'
          alt='Open Days Indonesia - Jakarta'
          w='80px'
          h='80px'
          objectFit='fill'
          borderRadius='lg'
        />
      </Box>
      <VStack alignItems='left' ml='1'>
        <Heading size='sm' noOfLines='2'>
          Open Days Indonesia - Jakarta
        </Heading>
        <Text>Free</Text>
        <HStack justifyContent='space-between'>
          <HStack>
            <IconButton
              aria-label='Add more ticket'
              icon={<AddIcon />}
              size='xs'
              onClick={() => setCount(count + 1)}
            />
            <Text>{count}</Text>
            <IconButton
              aria-label='Add more ticket'
              icon={<MinusIcon />}
              size='xs'
              onClick={() => setCount(count - 1)}
            />
          </HStack>
          <IconButton
            aria-label='Delete ticket'
            icon={<DeleteIcon />}
            size='xs'
          />
        </HStack>
      </VStack>
    </HStack>
  );
}

export default NavbarCartItem;
