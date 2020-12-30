import { domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";

interface PreProps {
  data: any;
  options: HTMLReactParserOptions;
}

const Pre: React.FC<PreProps> = ({ data, options }) => {
  return <div>{domToReact(data.children, options)}</div>;
};
export default Pre;
