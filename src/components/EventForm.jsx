import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Select,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postEvent } from '../app/features/eventSlice';

function EventForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    handleAuthor();
  }, []);

  const handleAuthor = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setAuthor(user.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoadingState(true);
    dispatch(
      postEvent({
        name,
        type,
        description,
        price,
        date,
        time,
        location,
        image,
        author,
      })
    );
    navigate('/');
  };

  const handleType = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);

    if (selectedType === 'Free') {
      setPrice(0);
    }
  };

  const handlePrice = (event) => {
    const priceValue = event.target.value;
    const priceAsFloat = parseFloat(priceValue);

    if (isNaN(priceAsFloat)) {
      setPrice(0);
    } else {
      setPrice(priceAsFloat);
    }
  };

  return (
    <Box w='100%'>
      <HStack
        justifyContent='space-between'
        mb='12'
        alignItems={{ base: 'flex-start', sm: 'center' }}
      >
        <Heading size='3xl' color='gray.700'>
          Create an event
        </Heading>
        <IconButton as={RouterLink} to='/' icon={<CloseIcon />} />
      </HStack>
      <form onSubmit={handleSubmit}>
        <FormControl mb='4'>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            placeholder='What is your event name?'
            size='lg'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder='Select your event type'
            size='lg'
            value={type}
            onChange={handleType}
          >
            <option value='Free'>Free</option>
            <option value='Paid'>Paid</option>
          </Select>
        </FormControl>
        {type === 'Paid' && (
          <FormControl mb='4'>
            <FormLabel>Price</FormLabel>
            <Input
              type='number'
              placeholder='Enter your event price'
              size='lg'
              value={price}
              onChange={handlePrice}
            />
          </FormControl>
        )}
        <FormControl mb='4'>
          <FormLabel>Image URL</FormLabel>
          <Input
            type='url'
            placeholder='Set your event image URL'
            size='lg'
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>Date</FormLabel>
          <Input
            type='date'
            size='lg'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>Time</FormLabel>
          <Input
            type='time'
            size='lg'
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>Location</FormLabel>
          <Input
            type='text'
            placeholder="Where is your event's location?"
            size='lg'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </FormControl>
        <FormControl mb='4'>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder='Describe your wonderful event'
            size='lg'
            w='100%'
            h='40'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>
        <Button
          type='submit'
          colorScheme='orange'
          w='100%'
          size='lg'
          isLoading={loadingState}
          loadingText='Creating your event'
        >
          Create event
        </Button>
      </form>
    </Box>
  );
}

export default EventForm;
