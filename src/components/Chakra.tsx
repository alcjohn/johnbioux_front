import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import React from "react";

interface ChakraProps {
  cookies: any;
}

const Chakra: React.FC<ChakraProps & ChakraProviderProps> = ({
  cookies,
  children,
  ...props
}) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;
  return (
    <ChakraProvider {...props} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export default Chakra;
