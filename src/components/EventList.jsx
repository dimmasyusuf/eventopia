import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import EventCard from './EventCard';

function EventList() {
  return (
    <Stack px={{ sm: 2, lg: 12 }} mt='6'>
      <Heading as='h2' size='lg' color='gray.700' px='4'>
        Events
      </Heading>
      <SimpleGrid
        bg='gray.50'
        columns={{ sm: 1, md: 2, lg: 4 }}
        alignItems='center'
        justify='center'
        wrap='wrap'
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SimpleGrid>
    </Stack>
  );
}

export default EventList;
