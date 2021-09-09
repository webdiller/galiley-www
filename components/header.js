import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <div className="container container_large header__wrapper">
        {/* logo */}
        <a className="header__logo-link">
          <img src="https://www.glofox.com/wp-content/uploads/2021/04/glofox-logo-black.svg" className="header__logo-img" alt="glofox-logo-black" loading="lazy" height="32" width="124" />
        </a>

        {/* nav */}
        <nav className="header__menu">
          <Link href="/">
            <a className={router.pathname == "/" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>Главная</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>О нас</a>
          </Link>
          <Link href="/news">
            <a className={router.pathname == "/news" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>Новости</a>
          </Link>
          <Link href="/contacts">
            <a className={router.pathname == "/contacts" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>Контакты</a>
          </Link>
          <Link href="/services">
            <a className={router.pathname == "/services" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>Услуги</a>
          </Link>
          <Link href="/features">
            <a className={router.pathname == "/features" ? "ui-item ui-item_active header__menu-item ": "ui-item header__menu-item"}>Преимущства</a>
          </Link>
        </nav>

        <button className="ui-btn header__btn">Портфолио</button>
      </div>
    </header>
  );
}
