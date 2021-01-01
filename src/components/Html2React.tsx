import { Divider } from "@chakra-ui/react";
import parse, { HTMLReactParserOptions } from "html-react-parser";
import { Language } from "prism-react-renderer";
import React from "react";
import CodeBlock from "./codeblock/codeblock";
import A from "./processors/A";
import H2 from "./processors/H2";
import H3 from "./processors/H3";
import P from "./processors/P";
import Pre from "./processors/Pre";

const components: Record<
  string,
  React.FC<{ data: any; options: HTMLReactParserOptions }>
> = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  pre: Pre,
};

const options: HTMLReactParserOptions = {
  replace: (data: any) => {
    if (data.type !== "tag") {
      return;
    }
    const CustomComponent = components[data.name];
    if (CustomComponent) {
      return <CustomComponent data={data} options={options} />;
    }
    if (data.name === "hr") {
      return <Divider />;
    }
  },
};

interface Html2ReactProps {
  html: string;
}

const Html2React: React.FC<Html2ReactProps> = ({ html }) => {
  return <>{parse(html, options)}</>;
};
export default Html2React;
