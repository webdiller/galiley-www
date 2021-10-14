import Copyright from "./copyright";
import CustomHead from "./customHead";

/** Дефолтное расположение эементов */
export default function DefaultLayout({
  title = "Galiley Enterprise",
  description = "Описание",
  children
} = {}) {
  return (
    <>
      <CustomHead title={title} description={description}/>
      {children}
      <Copyright />
    </>
  );
}
