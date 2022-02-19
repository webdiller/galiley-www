import Copyright from "./copyright";
import CustomHead from "./customHead";

/** Дефолтное расположение эементов */
export default function DefaultLayout({
  title = "Galiley Enterprise",
  description = "Galiley Enterprise - Технологическая компания, которая занимается внедрением цифровых решений в бизнесе",
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
