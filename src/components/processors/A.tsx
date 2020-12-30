import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";

interface AProps {
  data: any;
  options: HTMLReactParserOptions;
}

const A: React.FC<AProps> = ({ data, options }) => {
  return (
    <Link href={data.attribs.href} isExternal>
      {domToReact(data.children, options)}
      <ExternalLinkIcon mx="2px" />
    </Link>
  );
};
export default A;
