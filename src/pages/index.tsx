import { Box, Flex, keyframes } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/layout/Layout';

const anim = (fromLeft = false) => keyframes`
  0% {
    transform: translateX(${fromLeft ? '-' : ''}20px);
    opacity: 0;
  }

  75% {
    opacity: 0.5;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
  }
`;

const Index: React.FC = () => {
  return (
    <Layout showBg={true}>
      <Flex
        h="full"
        justifyContent="center"
        alignItems={{
          base: 'center',
          lg: 'flex-start',
        }}
        pl={{
          lg: '15%',
        }}
        flexDirection="column"
      >
        <Flex justifyContent="center" alignItems="center" flexDir="column">
          <Box
            as="h1"
            textTransform="uppercase"
            animation={`${anim(true)} 0.5s linear`}
            fontSize={{
              base: '3rem',
              md: '6.5rem',
            }}
            lineHeight={{
              base: '2.5rem',
              md: '7.5rem',
            }}
          >
            <Box as="span" fontWeight="bold">
              <Box as="span" color="primary.500">
                J
              </Box>
              ohn
            </Box>{' '}
            <Box fontWeight="light" as="span">
              Bioux
            </Box>
          </Box>
          <Box
            fontSize={{
              base: '1.4rem',
              md: '3rem',
            }}
            as="h2"
            animation={`${anim()} 0.5s linear`}
            textTransform="uppercase"
            fontWeight="light"
          >
            Développeur fullstack
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Index;
