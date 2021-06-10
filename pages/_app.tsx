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
import ToastAlert from "components/alert";
// context provider
import { GlobalContextProvider } from "contexts/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
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
