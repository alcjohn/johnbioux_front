import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title="John Bioux - Développeur Fullstack"
        description="Développeur Fullstack en Freelance, création de site internet ou d'apllication web ou mobile avec React.js, React-Native, Typescript, Nodejs."
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
