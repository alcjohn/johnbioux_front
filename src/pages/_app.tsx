import theme from "../theme";
import { AppProps } from "next/app";
import Chakra from "../components/Chakra";

function MyApp({ Component, pageProps, cookies }: AppProps & any) {
  return (
    <Chakra resetCSS cookies={cookies} theme={theme}>
      <Component {...pageProps} />
    </Chakra>
  );
}
export function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
export default MyApp;
