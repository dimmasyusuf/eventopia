import { CloseIcon } from '@chakra-ui/icons';
import {
  Stack,
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
import { useState } from 'react';

function CreateEvent() {
  const [type, setType] = useState('');

  return (
    <Stack
      w='100%'
      justifyContent='center'
      alignItems='center'
      py='24'
      px='36'
      overflow='hidden'
      sx={{ '::-webkit-scrollbar': { display: 'none' } }}
    >
      <Box w='100%'>
        <HStack justifyContent='space-between' mb='12'>
          <Heading size='3xl' color='gray.700'>
            Create an event
          </Heading>
          <IconButton icon={<CloseIcon />} />
        </HStack>
        <form>
          <FormControl mb='4'>
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              placeholder='What is your event name?'
              size='lg'
            />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel>Type</FormLabel>
            <Select
              placeholder='Select your event type'
              size='lg'
              value={type}
              onChange={(event) => setType(event.target.value)}
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
              />
            </FormControl>
          )}
          <FormControl mb='4'>
            <FormLabel>Date</FormLabel>
            <Input type='date' size='lg' />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel>Time</FormLabel>
            <Input type='time' size='lg' />
          </FormControl>
          <FormControl mb='4'>
            <FormLabel>Location</FormLabel>
            <Input
              type='text'
              placeholder="Where is your event's location?"
              size='lg'
            />
          </FormControl>
          <FormControl mb='8'>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Describe your wonderful event' size='lg' />
          </FormControl>
          <Button type='submit' colorScheme='orange' w='100%' size='lg'>
            Create event
          </Button>
        </form>
      </Box>
    </Stack>
  );
}

export default CreateEvent;
