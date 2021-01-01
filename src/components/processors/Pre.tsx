import { Language } from "prism-react-renderer";
import React from "react";
import CodeBlock from "../codeblock/codeblock";

interface PreProps {
  data: any;
}

const Pre: React.FC<PreProps> = ({ data }) => {
  if (data.attribs.class.includes("wp-block-code")) {
    const rx = /language-(.*?)$/gm;
    const exc = rx.exec(data.attribs.class);
    const langage = exc?.length ? exc[1] : "";
    return (
      <CodeBlock
        language={langage as Language}
        viewlines={true}
        codeString={data.children[0].children[0].data}
      />
    );
  }
  return null;
};
export default Pre;
