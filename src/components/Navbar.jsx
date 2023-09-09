import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerBody,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  DrawerHeader,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex py='4' px='6' justifyContent='space-between'>
      <Text as='b' fontSize='2xl' mr='2' cursor='pointer'>
        Eventopia
      </Text>
      <Flex
        ml='24'
        w='100%'
        justifyContent='space-between'
        alignItems='center'
        display={{ base: 'none', sm: 'none', md: 'flex' }}
      >
        <InputGroup w='60%'>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search event'
            focusBorderColor='yellow.300'
          />
        </InputGroup>
        <Flex gap='2'>
          <Button
            as={RouterLink}
            to='/login'
            colorScheme='white'
            color='black'
            _hover={{ background: 'gray.50' }}
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to='/register'
            colorScheme='white'
            color='black'
            _hover={{ background: 'gray.50' }}
          >
            Register
          </Button>
        </Flex>
      </Flex>
      <IconButton
        aria-label='Menu'
        icon={<HamburgerIcon />}
        display={{ sm: 'flex', md: 'none' }}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <InputGroup w='100%'>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                type='text'
                placeholder='Search event'
                focusBorderColor='yellow.300'
              />
            </InputGroup>
          </DrawerBody>
          <DrawerFooter>
            <Flex justifyContent='space-between' gap='4' w='100%'>
              <Button
                as={RouterLink}
                to='/register'
                colorScheme='white'
                color='black'
                _hover={{ background: 'gray.50' }}
              >
                Register
              </Button>
              <Button
                as={RouterLink}
                to='/login'
                colorScheme='white'
                color='black'
                _hover={{ background: 'gray.50' }}
              >
                Login
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
