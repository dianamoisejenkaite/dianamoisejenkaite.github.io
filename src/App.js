import logo from './logo.svg';
import './App.css';
import { Box,Stack,Heading,Text,useBreakpointValue } from '@chakra-ui/react';

function App() {

  const top = useBreakpointValue({ base: '20%', md: '30%' });
  const side = useBreakpointValue({ base: '63%', md: '65%' });

  return (
      <Stack direction={['column', 'row']} spacing='0px'
      height={['400px','430px','600px','800px']}>
        <Box 
          position={'relative'}
          width={'full'}
          backgroundImage={'images/raw-dm.jpg'}
          backgroundColor={'#4b819c'}
          backgroundSize={'100%'}
          backgroundBlendMode={'hard-light'}
          backgroundRepeat={'no-repeat'}
          >
            <Box
              left={side}
              top={top}
              position={'relative'}
            >
              <Heading 
                fontFamily={'Quicksand-Regular'}
                fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                color={'#4b819c'}
              >
                  Diana Moisejenkaite
              </Heading>
              <Text 
                fontFamily={'Quicksand-Medium'}
                fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                color={'#ebebeb'}
              >
                Violinist / Composer / Musician
              </Text>
            </Box>

        </Box>
      </Stack>
  );
}

export default App;
