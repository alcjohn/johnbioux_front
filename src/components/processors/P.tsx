import { Text, TypographyProps } from "@chakra-ui/react";
import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React, { useMemo } from "react";
import textAlignProperties from "../../properties/textAlignProperties";

interface PProps {
  data: any;
  options: HTMLReactParserOptions;
}

const P: React.FC<PProps> = ({ data, options }) => {
  const textAlign = useMemo(() => {
    const regx = /has-text-align-(.*?)$/gm;
    const test = regx.exec(data.attribs.class);
    if (test && textAlignProperties.includes(test[1])) {
      return test[1] as TypographyProps["textAlign"];
    }

    return "justify";
  }, [data.attribs.class]);
  return (
    <Text fontSize="lg" my={6} textAlign={textAlign}>
      {domToReact(data.children, options)}
    </Text>
  );
};
export default P;
