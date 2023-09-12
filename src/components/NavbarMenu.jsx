import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import NavbarCart from './NavbarCart';
import SearchInput from './SearchInput';

function NavbarMenu() {
  const isAuthenticated = JSON.parse(localStorage.getItem('onAuth'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('onAuth');
    navigate('/login');
  };

  return (
    <Flex
      ml={{ md: '8', lg: '24' }}
      width='100%'
      justifyContent='space-between'
      alignItems='center'
      display={{ base: 'none', sm: 'none', md: 'flex' }}
    >
      <SearchInput />
      {isAuthenticated === true ? (
        <>
          <Flex gap='2' alignItems='center'>
            <Button
              as={RouterLink}
              to='/create'
              colorScheme='white'
              color='black'
              _hover={{ background: 'gray.200' }}
            >
              Create an event
            </Button>
            <NavbarCart />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                aria-label='User Profile'
                colorScheme='white'
                color='black'
                _hover={{ background: 'gray.200' }}
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
                  colorScheme='white'
                  color='black'
                  _hover={{ background: 'gray.200' }}
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
  );
}

export default NavbarMenu;
