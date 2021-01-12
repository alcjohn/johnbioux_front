import { Box, Button, Grid, Text } from "@chakra-ui/react";
import React from "react";
import CookieConsent from "react-cookie-consent";
import useFullHeight from "../../hooks/useFullHeight";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const height = useFullHeight();

  return (
    <Grid height={height} gridTemplateRows="auto 1fr" overflow="hidden">
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
