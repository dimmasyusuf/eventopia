import { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../app/features/loginSlice';

function LoginForm() {
  const { users } = useSelector((state) => state.login);
  const [loadingState, setLoadingState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const loginUser = () => {
    setLoadingState(true);
    let userFound = false;

    users.forEach((user) => {
      if (user.email === formik.values.email) {
        userFound = true;
        if (user.password === formik.values.password) {
          setLoadingState(false);
          localStorage.setItem('onAuth', true);
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/');
        } else {
          setLoadingState(false);
          formik.setErrors({ password: 'Password is incorrect' });
        }
      }
    });

    if (!userFound) {
      setLoadingState(false);
      formik.setErrors({ email: `Email can't be found` });
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      onAuth: true,
    },
    onSubmit: loginUser,
    validationSchema: LoginSchema,
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <Box
      w={{ base: '90%', sm: '65%', md: '60%', lg: '50%', xl: '30%' }}
      borderWidth='1px'
      borderRadius='md'
      p='6'
    >
      <Heading mb='6'>Login</Heading>
      <form onSubmit={formik.handleSubmit}>
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
          loadingText='Logging in'
        >
          Login
        </Button>
      </form>
      <Text textAlign='center'>
        Don&apos;t have an account ?{' '}
        <Link
          as={RouterLink}
          to='/register'
          fontWeight='md'
          color='orange.500'
          textDecor='underline'
          _hover={{ color: 'orange.100' }}
        >
          Register
        </Link>
      </Text>
    </Box>
  );
}

export default LoginForm;
