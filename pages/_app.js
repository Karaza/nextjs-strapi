import '../styles/global.css';
import Header from 'components/Header';
import getConfig from 'next/config';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import ContextWrapper from 'components/ContextWrapper';

function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ContextWrapper navigation={navigation}>
        <Header />
      </ContextWrapper>
      <Component {...pageProps} />
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
