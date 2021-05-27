import '../styles/global.css';
import Header from 'components/Header';
import getConfig from 'next/config';

function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation);

  return (
    <>
      <Header navigation={navigation} />
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
