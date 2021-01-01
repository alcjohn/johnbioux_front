import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  useClipboard,
} from "@chakra-ui/react";
import { Language } from "prism-react-renderer";
import React from "react";
import Highlight from "./highlight";

const CopyButton: React.FC<ButtonProps> = (props) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    {...props}
  />
);

const CodeContainer: React.FC<BoxProps> = (props) => (
  <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
);
interface CodeBlockProps {
  language: Language;
  viewlines?: boolean;
  ln?: string;
  codeString: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  viewlines,
  language,
  ln,
  codeString,
}) => {
  const { hasCopied, onCopy } = useClipboard(codeString);

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={codeString}
          language={language}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top="4" onClick={onCopy}>
        {hasCopied ? "copié" : "copier"}
      </CopyButton>
    </Box>
  );
};

export default CodeBlock;
