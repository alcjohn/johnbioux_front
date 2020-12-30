import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  useClipboard,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Highlight from "./highlight";

export const liveEditorStyle: React.CSSProperties = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "SF Mono, Menlo, monospace",
};

export const liveErrorStyle: React.CSSProperties = {
  fontFamily: "SF Mono, Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
};

const CopyButton = (props: ButtonProps) => (
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

const CodeContainer = (props: BoxProps) => (
  <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
);

function CodeBlock(props: any) {
  const { children, viewlines, language, ln } = props;

  const { hasCopied, onCopy } = useClipboard(children.trim());

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={children.trim()}
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
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
};

export default CodeBlock;
