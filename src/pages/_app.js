import { GeneralProvider } from '@/context/GeneralContext';
import '@/assets/sass/index.scss';

function App({ Component, pageProps }) {
  return (
    <GeneralProvider value={{ ...pageProps?.data?.general }}>
      <Component {...pageProps} />
    </GeneralProvider>
  );
}

export default App;
