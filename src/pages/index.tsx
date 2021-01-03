import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

const Index: React.FC = () => (
  <Layout>
    <Head>
      <title>John Bioux - Développeur Fullstack</title>
      <meta
        name="description"
        content="Développeur Fullstack Javascript, React, React Native, Nodejs"
      />
    </Head>
    <Flex
      h="full"
      justifyContent="center"
      alignItems={{
        base: "center",
        lg: "flex-start",
      }}
      pl={{
        lg: "15%",
      }}
      flexDirection="column"
    >
      <Box
        as="h1"
        textTransform="uppercase"
        fontSize={{
          base: "3rem",
          md: "6.5rem",
        }}
        lineHeight={{
          base: "2.5rem",
          md: "7.5rem",
        }}
      >
        <Box as="span" fontWeight="bold">
          <Box as="span" color="primary.500">
            J
          </Box>
          ohn
        </Box>{" "}
        <Box as="span">Bioux</Box>
      </Box>
      <Box
        fontSize={{
          base: "1.4rem",
          md: "3rem",
        }}
        as="h2"
        textTransform="uppercase"
        fontWeight="regular"
      >
        Développeur fullstack
      </Box>
    </Flex>
  </Layout>
);

export default Index;
