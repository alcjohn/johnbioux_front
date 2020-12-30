import { Heading } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";

interface H2Props {
  data: any;
  options: HTMLReactParserOptions;
}

const H2: React.FC<H2Props> = ({ data, options }) => (
  <Heading
    fontFamily="roboto"
    as="h2"
    color="primary.500"
    fontWeight="bold"
    mt={12}
    mb={4}
    fontSize="3xl"
  >
    {domToReact(data.children, options)}
  </Heading>
);
export default H2;
