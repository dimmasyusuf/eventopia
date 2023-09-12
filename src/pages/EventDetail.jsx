import {
  Box,
  Center,
  Stack,
  Image,
  Text,
  Heading,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { CalendarIcon } from '@chakra-ui/icons';
import { FaLocationDot } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventById } from '../app/features/eventSlice';
import { useParams } from 'react-router-dom';
import { format, isValid, parseISO } from 'date-fns';
import CartBox from '../components/CartBox';

function EventDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state.events);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (event.date) {
      const parsedDate = parseISO(event.date);
      if (isValid(parsedDate)) {
        setFormattedDate(format(parsedDate, 'EEEE, MMMM d'));
      } else {
        setFormattedDate('Invalid Date');
      }
    }
  }, [event.date]);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <Stack mx={{ base: '6', sm: '6', md: '16', lg: '20' }} mt='8'>
        <Box
          w='100%'
          maxH='470px'
          overflow='hidden'
          justifyContent='center'
          alignItems='center'
          display='flex'
          position='relative'
        >
          <Box
            position='absolute'
            top='0'
            left='0'
            right='0'
            bottom='0'
            zIndex='-1'
            backgroundImage={`url(${event.image})`}
            backgroundPosition='center'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            filter='blur(15px)'
          />
          <Image
            src={event.image}
            alt={event.name}
            h='auto'
            objectFit='cover'
          />
        </Box>
        <HStack
          mt='8'
          spacing='6'
          wrap='wrap'
          justifyContent='space-between'
          alignItems='flex-start'
        >
          <Stack w={{ sm: '100%', lg: '60%' }} mb='6'>
            <VStack spacing='4' alignItems='left'>
              <Text as='b' fontSize='xl'>
                {formattedDate}
              </Text>
              <Heading as='h3' size={{ base: '2xl', sm: '3xl' }} mb='2'>
                {event.name}
              </Heading>
              <Text mb='2'>{event.description}</Text>
              <Stack mb='2'>
                <Heading as='h4' fontSize='2xl' mb='2'>
                  Date and time
                </Heading>
                <HStack alignItems='center' gap='2'>
                  <Center w='24px' h='24px'>
                    <CalendarIcon />
                  </Center>
                  <Text as='b'>
                    {formattedDate} · {event.time}
                  </Text>
                </HStack>
              </Stack>
              <Stack>
                <Heading as='h4' fontSize='2xl' mb='2'>
                  Location
                </Heading>
                <HStack gap='2' alignItems='flex-start'>
                  <Center w='24px' h='24px'>
                    <Icon as={FaLocationDot} />
                  </Center>
                  <Text as='b'>{event.location}</Text>
                </HStack>
              </Stack>
            </VStack>
          </Stack>
          <Stack mb='6' w={{ base: '100%', lg: '30%' }}>
            <CartBox />
          </Stack>
        </HStack>
      </Stack>
    </>
  );
}

export default EventDetail;
