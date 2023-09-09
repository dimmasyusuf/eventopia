import { Stack, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <Stack
      w='100%'
      h='100vh'
      justifyContent='center'
      alignItems='center'
      bg='gray.50'
    >
      <Heading as='h1' fontSize='2xl' mb='5' color='gray.700' textAlign='left'>
        Eventopia.
      </Heading>
      <RegisterForm />
    </Stack>
  );
}

export default Register;
