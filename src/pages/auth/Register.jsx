import { Stack, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/RegisterForm';
import { Link as RouterLink } from 'react-router-dom';

function Register() {
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
      <RegisterForm />
    </Stack>
  );
}

export default Register;
