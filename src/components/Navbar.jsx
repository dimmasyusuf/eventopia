import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerBody,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  DrawerHeader,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = JSON.parse(localStorage.getItem('onAuth'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('onAuth');
    navigate('/login');
  };

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
            focusBorderColor='orange.500'
          />
        </InputGroup>
        {isAuthenticated === true ? (
          <>
            <Flex gap='2' alignItems='center'>
              <Button
                as={RouterLink}
                to='/create'
                colorScheme='white'
                color='black'
                _hover={{ background: 'gray.50' }}
              >
                Create an event
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  aria-label='User Profile'
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.50' }}
                >
                  <Icon as={FaUser} />
                </MenuButton>
                <MenuList
                  colorScheme='white'
                  mt='2'
                  borderRadius='none'
                  border='none'
                >
                  <MenuItem
                    as={RouterLink}
                    to='/dashboard'
                    colorScheme='white'
                    color='black'
                    _hover={{ background: 'gray.50' }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    colorScheme='white'
                    color='black'
                    _hover={{ background: 'gray.50' }}
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </>
        ) : (
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
        )}
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
            {isAuthenticated === true ? (
              <Flex flexDirection='column' gap='6'>
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
                <Link
                  to='/create'
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.50' }}
                >
                  Create an event
                </Link>
                <Link
                  to='/dashboard'
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.50' }}
                >
                  Dashboard
                </Link>
              </Flex>
            ) : (
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
            )}
          </DrawerBody>
          {isAuthenticated === true ? (
            <DrawerFooter>
              <Flex justifyContent='right' w='100%'>
                <Button
                  as={RouterLink}
                  to='/register'
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.50' }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Flex>
            </DrawerFooter>
          ) : (
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
          )}
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
