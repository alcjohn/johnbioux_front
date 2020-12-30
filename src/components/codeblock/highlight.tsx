import React from "react";
import BaseHighlight, { defaultProps, Language } from "prism-react-renderer";
import { liveEditorStyle } from "./codeblock";
import { chakra } from "@chakra-ui/react";
import theme from "prism-react-renderer/themes/nightOwl";

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;
const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  // @ts-ignore
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)));

  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
    return inRange;
  };
};
interface HighlightProps {
  codeString: string;
  language: Language;
  metastring?: string;
  showLines?: boolean;
}
const Highlight: React.FC<HighlightProps> = ({
  codeString,
  language,
  metastring,
  showLines,
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring || "");
  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={liveEditorStyle} data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              return (
                <chakra.div
                  px="5"
                  bg={shouldHighlightLine(i) ? "whiteAlpha.200" : undefined}
                  {...lineProps}
                >
                  {showLines && (
                    <chakra.span opacity={0.3} mr="6" fontSize="xs">
                      {i + 1}
                    </chakra.span>
                  )}
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </chakra.div>
              );
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  );
};
export default Highlight;
