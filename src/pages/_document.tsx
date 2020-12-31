import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
