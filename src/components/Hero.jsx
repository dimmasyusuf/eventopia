import { Stack, Flex, Button } from '@chakra-ui/react';

function Hero() {
  return (
    <Flex
      w='100%'
      h={{ base: '50vh', sm: '65vh', lg: '65vh' }}
      backgroundImage={{
        base: 'url(https://cdn.evbstatic.com/s3-build/fe/build/images/dd7a38e82eae1e1b713deec108e91559-3_mobile_659x494.webp)',
        sm: 'url(https://cdn.evbstatic.com/s3-build/fe/build/images/dd7a38e82eae1e1b713deec108e91559-3_mobile_659x494.webp)',
        md: 'url(https://cdn.evbstatic.com/s3-build/fe/build/images/5fe808e647422b815b98b73c28ecf405-3_tablet_1067x470.webp)',
        lg: 'url(https://cdn.evbstatic.com/s3-build/fe/build/images/5fe808e647422b815b98b73c28ecf405-3_tablet_1067x470.webp)',
      }}
      backgroundSize='cover'
    >
      <Stack
        w='100%'
        px={{ base: 6, lg: 16 }}
        pb='6'
        alignItems='flex-start'
        justifyContent='flex-end'
      >
        <Button
          colorScheme='orange'
          borderRadius='sm'
          color='white'
          _hover={{ background: 'orange.600' }}
        >
          Find your next event
        </Button>
      </Stack>
    </Flex>
  );
}

export default Hero;
