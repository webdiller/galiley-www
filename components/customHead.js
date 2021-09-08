import Head from "next/head";
import Header from "./header";

export default function CustomHead({ title = "default title", description = "default description" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
    </>
  );
}
