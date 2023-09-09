import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../app/features/registerSlice';

function RegisterForm() {
  const [loadingState, setLoadingState] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setLoadingState(true);
    dispatch(registerUser(formik.values))
      .then((res) => {
        console.log(res);
        navigate('/login');
      })
      .catch((err) => {
        toast({
          title: 'An error occurred',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        setLoadingState(false);
      });
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: RegisterSchema,
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <Box
      bg='white'
      w={{ base: '90%', sm: '65%', md: '60%', lg: '50%', xl: '30%' }}
      borderWidth='1px'
      borderRadius='md'
      p='6'
    >
      <Heading size='lg' mb='6' color='gray.700'>
        Create an account
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          mb='2'
          isInvalid={formik.errors.name && formik.touched.name}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            placeholder='Enter your name'
            py='6'
            onChange={handleForm}
            name='name'
            focusBorderColor='orange.500'
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl
          mb='2'
          isInvalid={formik.errors.email && formik.touched.email}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            placeholder='Enter your email'
            py='6'
            onChange={handleForm}
            name='email'
            focusBorderColor='orange.500'
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          mb='6'
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            placeholder='Enter your password'
            py='6'
            onChange={handleForm}
            name='password'
            focusBorderColor='orange.500'
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button
          type='submit'
          colorScheme='orange'
          width='100%'
          py='6'
          mb='6'
          isLoading={loadingState}
          loadingText='Creating account'
        >
          Create account
        </Button>
      </form>
      <Text textAlign='center'>
        Already have an account?{' '}
        <Link
          as={RouterLink}
          to='/login'
          fontWeight='md'
          color='orange.500'
          textDecor='underline'
          _hover={{ color: 'orange.100' }}
        >
          Login
        </Link>
      </Text>
    </Box>
  );
}

export default RegisterForm;
