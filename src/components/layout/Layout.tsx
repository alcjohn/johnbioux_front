import { Box, Button, Grid, useColorMode, Text } from "@chakra-ui/react";
import React from "react";
import CookieConsent from "react-cookie-consent";
import useFullHeight from "../../hooks/useFullHeight";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const bgColor = { light: "gray.50", dark: "bgPrimary" };
const color = { light: "bgPrimary", dark: "white" };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const height = useFullHeight();

  return (
    <Grid
      height={height}
      gridTemplateRows="auto 1fr"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      overflow="hidden"
    >
      <Header />
      <Grid
        overflow="auto"
        gridTemplateRows="1fr auto"
        gridTemplateColumns="100%"
        w="full"
      >
        <Box as="main">{children}</Box>
        <Footer />
      </Grid>

      <CookieConsent
        debug
        buttonText="Accepter"
        style={{
          justifyContent: "center",
          position: "relative",
        }}
        ButtonComponent={(props) => (
          <Button
            bg="primary.500"
            color="white"
            size="sm"
            {...props}
            m={1}
            style={{}}
          >
            {props.children}
          </Button>
        )}
      >
        <Text fontSize="sm">
          En poursuivant votre navigation sur ce site, vous acceptez
          l’utilisation de cookies ou autres traceurs
        </Text>
      </CookieConsent>
    </Grid>
  );
};
export default Layout;
