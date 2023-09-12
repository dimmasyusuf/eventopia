import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../app/features/eventSlice';
import DateTimeComponent from './DateTimeComponent';
import { Link as RouterLink } from 'react-router-dom';

function EventCard() {
  const { events } = useSelector((state) => state.events);
  const searchResults = useSelector((state) => state.events.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return searchResults.length > 0
    ? searchResults.map((event) => (
        <Box p='4' maxW={{ lg: '315px' }} w='100%' key={event.id}>
          <Card
            as={RouterLink}
            to={`/event/${event.id}`}
            maxW='100%'
            shadow='sm'
            _hover={{ shadow: 'lg' }}
          >
            <Image
              src={event.image}
              alt={event.name}
              w='100%'
              maxH='140px'
              objectFit='cover'
            />
            <CardBody>
              <Stack>
                <Heading as='h3' size='md' noOfLines='2' color='gray.700'>
                  {event.name}
                </Heading>
                <DateTimeComponent date={event.date} time={event.time} />
                <Text color='gray'>{event.location}</Text>
                {event.type === 'Free' ? (
                  <Text color='gray'>Free</Text>
                ) : (
                  <HStack color='gray' spacing='1' mb='2'>
                    <Icon as={FaDollarSign} />
                    <Text>{event.price}</Text>
                  </HStack>
                )}
                <Text as='b' color='gray.700'>
                  {event.author}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ))
    : events.map((event) => (
        <Box p='4' w='100%' key={event.id}>
          <Card
            as={RouterLink}
            to={`/event/${event.id}`}
            maxW='100%'
            shadow='sm'
            _hover={{ shadow: 'lg' }}
          >
            <Image
              src={event.image}
              alt={event.name}
              w='100%'
              maxH='140px'
              objectFit='cover'
            />
            <CardBody>
              <Stack>
                <Heading as='h3' size='md' noOfLines='2' color='gray.700'>
                  {event.name}
                </Heading>
                <DateTimeComponent date={event.date} time={event.time} />
                <Text color='gray'>{event.location}</Text>
                {event.type === 'Free' ? (
                  <Text color='gray'>Free</Text>
                ) : (
                  <HStack color='gray' spacing='1' mb='2'>
                    <Icon as={FaDollarSign} />
                    <Text>{event.price}</Text>
                  </HStack>
                )}
                <Text as='b' color='gray.700'>
                  {event.author}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      ));
}

export default EventCard;
