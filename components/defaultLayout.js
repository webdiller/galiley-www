import Copyright from "./copyright";
import CustomHead from "./customHead";

/** Дефолтное расположение эементов */
export default function DefaultLayout({
  title = "default title",
  description = "default description",
  children
}) {
  return (
    <>
      <CustomHead />
      {children}
      <Copyright />
    </>
  );
}
