import { Box, Button, Grid, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import useFullHeight from '../../hooks/useFullHeight';
import Footer from './Footer';
import Header from './Header';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

interface LayoutProps {
  showBg?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBg }) => {
  const height = useFullHeight();
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect && showBg) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#39ac54',
          backgroundColor: '#262626',
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, showBg]);

  return (
    <Grid
      ref={myRef}
      height={height}
      gridTemplateRows="auto 1fr"
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
        buttonText="Accepter"
        style={{
          justifyContent: 'center',
          position: 'relative',
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
