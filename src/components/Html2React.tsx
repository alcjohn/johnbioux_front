import { Box, Code, Divider, Heading, Text } from "@chakra-ui/react";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";
import CodeBlock from "./codeblock/codeblock";
import Highlight from "./codeblock/highlight";
import A from "./processors/A";
import H2 from "./processors/H2";
import H3 from "./processors/H3";
import P from "./processors/P";

const components: Record<
  string,
  React.FC<{ data: any; options: HTMLReactParserOptions }>
> = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
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
    if (data.name === "pre" && data.attribs.class.includes("wp-block-code")) {
      const rx = /language-(.*?)$/gm;
      const exc = rx.exec(data.attribs.class);
      const langage = exc?.length ? exc[1] : "";
      return (
        <CodeBlock language={langage} viewlines={true}>
          {data.children[0].children[0].data}
        </CodeBlock>
      );
      // return <Code>{data.children[0].children[0].data}</Code>;
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
