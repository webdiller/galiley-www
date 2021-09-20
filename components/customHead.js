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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
    </>
  );
}
