import '@fontsource/josefin-sans';
import '@fontsource/lato';
// Tailwind CSS, migrating into
import '../styles/globals.css';
// Styled Components, migrating away
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
