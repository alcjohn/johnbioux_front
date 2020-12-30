import { Heading } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";

interface H3Props {
  data: any;
  options: HTMLReactParserOptions;
}

const H3: React.FC<H3Props> = ({ data, options }) => (
  <Heading fontFamily="roboto" as="h3" fontWeight="bold" fontSize="2xl">
    {domToReact(data.children, options)}
  </Heading>
);
export default H3;
