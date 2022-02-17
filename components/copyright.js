/** Права в футере */
export default function Copyright() {
  return (
    <div className="copyright">
      <div className="container copyright__wrapper">
        <a className="copyright__logo-link">

          {/* TODO: Создать логотип и вставить в нативный Image или вывести svg */}
          {/* <img
            src="https://www.glofox.com/wp-content/uploads/2021/04/glofox-logo-black.svg"
            className="copyright__logo-img"
            alt="glofox-logo-black"
            loading="lazy"
            height="32"
            width="124"
          /> */}
          <span className="copyright__logo-title-lg">Galiley Enterprise</span>
          <span className="copyright__logo-title-sm">Galiley Enterprise</span>
        </a>

        <div className="ui-text copyright__rights">
          <strong>©2021 Galiley Enterprise</strong> — Все права защищены
        </div>

        <nav className="copyright__socials">
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
          <a href="#" className="copyright__social"></a>
        </nav>
      </div>
    </div>
  );
}
