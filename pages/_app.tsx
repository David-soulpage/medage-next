// next imports
import App from "next/app";
import Head from "next/head";
// next seo
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
// app css
import "styles/App.scss";

// axios config
import "config/axios";
// components
import ToastAlert from "@components/alert";
// context provider
import { GlobalContextProvider } from "@contexts/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
            crossOrigin="anonymous"
          />
        </Head>
        <DefaultSeo {...SEO} />
        <GlobalContextProvider>
          <ToastAlert />
          <Component {...pageProps} />
        </GlobalContextProvider>
      </>
    );
  }
}

export default MyApp;
