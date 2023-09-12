import { Stack, Heading } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  return (
    <Stack
      w='100%'
      h='100vh'
      justifyContent='center'
      alignItems='center'
      bg='gray.50'
    >
      <Heading
        as={RouterLink}
        fontWeight='bold'
        fontSize='2xl'
        cursor='pointer'
        to='/'
        mb='6'
      >
        Eventopia.
      </Heading>
      <LoginForm />
    </Stack>
  );
}

export default Login;
