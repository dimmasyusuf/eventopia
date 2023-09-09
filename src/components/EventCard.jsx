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
import { FaDollarSign } from 'react-icons/fa6';

function EventCard() {
  return (
    <Box p='4' w='100%'>
      <Card maxW='100%' shadow='sm' _hover={{ shadow: 'lg' }}>
        <Image
          src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F572639029%2F121703163141%2F1%2Foriginal.20230810-130341?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=eaac9a819fbdcb319811a98893079353'
          alt='Open Days Indonesia in Jakarta Image'
          w='100%'
        />
        <CardBody>
          <Stack>
            <Heading as='h3' size='md' noOfLines='2' color='gray.700'>
              Open Days Indonesia - Jakarta
            </Heading>
            <Text color='gray'>Mon, Sep 20, 2021 9:00 AM WIB</Text>
            <Text color='gray'>Le Meridien Jakarta</Text>
            <HStack color='gray' spacing='2' mb='2'>
              <Icon as={FaDollarSign} />
              <Text>Free</Text>
            </HStack>
            <Text as='b' color='gray.700'>
              The University of Sydney
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default EventCard;
