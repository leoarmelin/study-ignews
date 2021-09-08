import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider as NextAuthProvider } from 'next-auth/client';

import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
