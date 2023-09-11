import { Stack } from '@chakra-ui/react';
import EventForm from '../components/EventForm';

function CreateEvent() {
  return (
    <Stack
      w='100%'
      justifyContent='center'
      alignItems='center'
      py={{ base: '6', md: '20', lg: '24' }}
      px={{ base: '6', md: '20', lg: '36' }}
    >
      <EventForm />
    </Stack>
  );
}

export default CreateEvent;
