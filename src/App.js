import logo from './logo.svg';
import './App.css';
import { Box,Stack,Heading,Text,useBreakpointValue } from '@chakra-ui/react';

function App() {

  const top = useBreakpointValue({ base: '75%', md: '30%' });
  const side = useBreakpointValue({ base: '15%', md: '65%' });

  return (
      <Stack direction={['column', 'row']} spacing='0px'>
        <Box 
          height={['210px','400px','430px','600px','800px']}
          width={'full'}
          position={'relative'}
          backgroundImage={process.env.PUBLIC_URL + '/images/raw-dm.jpg'}
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
              <Box
                width={'200px'}
              >
                <Heading
                  fontWeight={400}
                  fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
                  
                  color={'#4b819c'}
                >
                    Diana Moisejenkaite
                </Heading>
                <Text 
                  fontWeight={500}
                  fontSize={{ base: 'xs', md: 'md', lg: 'lg' }}
                  color={'#ebebeb'}
                >
                  Violinist / Composer / Musician
                </Text>
              </Box>
            </Box>
            <br/>
            <br/>
            <br/>
            <br/>
        </Box>
      </Stack>
  );
}

export default App;
