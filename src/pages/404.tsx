import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";

interface FourOhFourProps {}

const FourOhFour: React.FC<FourOhFourProps> = ({}) => {
  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center" h="full">
        <Text fontSize="7xl" color="primary.500">
          404
        </Text>
      </Flex>
    </Layout>
  );
};
export default FourOhFour;
