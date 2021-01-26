import parse, { HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import A from './processors/A';
import Figure from './processors/Figure';
import H2 from './processors/H2';
import H3 from './processors/H3';
import P from './processors/P';
import Pre from './processors/Pre';
const components: Record<
  string,
  React.FC<{ data: any; options: HTMLReactParserOptions }>
> = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  pre: Pre,
  figure: Figure,
};

const options: HTMLReactParserOptions = {
  replace: (data: any) => {
    if (data.type !== 'tag') {
      return;
    }
    const CustomComponent = components[data.name];
    if (CustomComponent) {
      return <CustomComponent data={data} options={options} />;
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
