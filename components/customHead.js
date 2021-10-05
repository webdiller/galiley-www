import Head from "next/head";
import Header from "./header";

/** Кастомный head */
export default function CustomHead({ title = "default title", description = "default description" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <Header />
    </>
  );
}
