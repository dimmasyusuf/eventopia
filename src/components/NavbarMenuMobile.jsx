import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerBody,
  Flex,
  IconButton,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useDisclosure,
  DrawerHeader,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaRightFromBracket } from 'react-icons/fa6';
import SearchInput from './SearchInput';

function NavbarMenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = JSON.parse(localStorage.getItem('onAuth'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('onAuth');
    navigate('/login');
  };

  return (
    <>
      <IconButton
        aria-label='Menu Button'
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {isAuthenticated === true ? (
              <Flex flexDirection='column' gap='6'>
                <SearchInput />
                <Link
                  as={RouterLink}
                  to='/create'
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.200' }}
                  px='4'
                  py='2'
                  borderRadius='md'
                >
                  Create an event
                </Link>
              </Flex>
            ) : (
              <InputGroup w='100%'>
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  type='text'
                  placeholder='Search your event'
                  focusBorderColor='blue.500'
                />
              </InputGroup>
            )}
          </DrawerBody>
          {isAuthenticated === true ? (
            <DrawerFooter>
              <Flex justifyContent='right' w='100%'>
                <Button
                  as={RouterLink}
                  to='/login'
                  background='gray.100'
                  color='black'
                  onClick={handleLogout}
                  width='100%'
                  justifyContent='space-between'
                  alignItems='center'
                  __hover={{ background: 'gray.200' }}
                >
                  <Icon as={FaRightFromBracket} /> Logout
                </Button>
              </Flex>
            </DrawerFooter>
          ) : (
            <DrawerFooter>
              <Flex justifyContent='space-between' gap='4' w='100%'>
                <Button
                  as={RouterLink}
                  to='/register'
                  background='gray.100'
                  color='black'
                  _hover={{ background: 'gray.200' }}
                >
                  Register
                </Button>
                <Button
                  as={RouterLink}
                  to='/login'
                  background='gray.100'
                  color='black'
                  _hover={{ background: 'gray.200' }}
                >
                  Login
                </Button>
              </Flex>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarMenuMobile;
