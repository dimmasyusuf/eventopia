import {
  Box,
  Button,
  Center,
  Stack,
  Image,
  Text,
  Heading,
  Icon,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { CalendarIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FaLocationDot } from 'react-icons/fa6';

function Event() {
  return (
    <>
      <Navbar />
      <Stack mx={{ base: '6', sm: '6', md: '16', lg: '20' }} mt='8'>
        <Image
          boxSize='100%'
          backgroundSize='cover'
          src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F572639029%2F121703163141%2F1%2Foriginal.20230810-130341?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=eaac9a819fbdcb319811a98893079353'
          alt='Open Days Indonesia - Jakarta'
        />
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
                Sunday, October 8
              </Text>
              <Heading as='h3' size={{ base: '2xl', sm: '3xl' }} mb='2'>
                Open Days Indonesia - Jakarta
              </Heading>
              <Text mb='2'>
                Open Days Indonesia is an exclusive event for Indonesian
                prospective students.
              </Text>
              <Stack mb='2'>
                <Heading as='h4' fontSize='2xl' mb='2'>
                  Date and time
                </Heading>
                <HStack alignItems='center' gap='2'>
                  <Center w='24px' h='24px'>
                    <CalendarIcon />
                  </Center>
                  <Text as='b'>Mon, Oct 8, 2021</Text>
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
                  <VStack alignItems='left' pr='12'>
                    <Text as='b'>Le Meridien Jakarta</Text>
                    <Text color='gray.500'>
                      Kav 18 - 20 Jalan Jenderal Sudirman Kecamatan Tanah Abang,
                      Daerah Khusus Ibukota Jakarta 10220
                    </Text>
                  </VStack>
                </HStack>
              </Stack>
            </VStack>
          </Stack>
          <Stack mb='6' w={{ base: '100%', lg: '30%' }}>
            <Box borderWidth='1px' borderRadius='lg' w='100%' p='6'>
              <HStack
                mb='6'
                borderWidth='2px'
                p='6'
                borderColor='blue'
                borderRadius='lg'
                alignItems='flex-start'
                justifyContent='space-between'
              >
                <VStack alignItems='left'>
                  <Text as='b' noOfLines='2'>
                    Open Days Indonesia - Jakarta
                  </Text>
                  <Text>Free</Text>
                </VStack>
                <HStack spacing={{ base: '4', lg: '2' }}>
                  <IconButton
                    size='sm'
                    aria-label='Add tickets'
                    icon={<AddIcon />}
                  />
                  <Text as='b'>1</Text>
                  <IconButton
                    size='sm'
                    aria-label='Remove tickets'
                    icon={<MinusIcon />}
                  />
                </HStack>
              </HStack>
              <Button colorScheme='orange' width='100%'>
                Reserve a spot
              </Button>
            </Box>
          </Stack>
        </HStack>
      </Stack>
    </>
  );
}

export default Event;
