import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>QUEK</title>
        <meta name="description" content="Your quek quek companion" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default api.withTRPC(MyApp);
