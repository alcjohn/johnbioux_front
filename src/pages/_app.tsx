import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import { FRONT_URL } from "../url";
import { Chakra } from "../components/ChakraProvider";

const title = "John Bioux - Développeur Fullstack";
const description =
  "Développeur Fullstack en Freelance, création de site internet ou d'apllication web ou mobile avec React.js, React-Native, Typescript, Nodejs.";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra resetCSS theme={theme}>
      <DefaultSeo
        title={title}
        description={description}
        openGraph={{
          description,
          url: FRONT_URL,
          type: "website",
          site_name: title,
          images: [
            {
              url:
                "https://admin.johnbioux.fr/wp-content/uploads/2021/01/home.jpg",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </Chakra>
  );
}
export { getServerSideProps } from "../components/ChakraProvider";
export default MyApp;
