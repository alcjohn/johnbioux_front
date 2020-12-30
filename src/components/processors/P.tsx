import { Box, Text } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";

interface PProps {
  data: any;
  options: HTMLReactParserOptions;
}

const P: React.FC<PProps> = ({ data, options }) => {
  return (
    <Text fontSize="lg" my={6} textAlign="justify">
      {domToReact(data.children, options)}
    </Text>
  );
};
export default P;
