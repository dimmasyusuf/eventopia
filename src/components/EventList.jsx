import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import EventCard from './EventCard';

function EventList() {
  return (
    <Stack px={{ base: 2, lg: 12 }} mt='6'>
      <Heading as='h2' size='lg' color='gray.700' px='4'>
        Events
      </Heading>
      <SimpleGrid
        bg='gray.50'
        minChildWidth='300px'
        justify='center'
        wrap='wrap'
      >
        <EventCard />
      </SimpleGrid>
    </Stack>
  );
}

export default EventList;
