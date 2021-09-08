export default function Header() {
  return (

    <header className="header">
      <div className="container header__wrapper">
        {/* logo */}
        <a className="header__logo-link">
          <img src="https://www.glofox.com/wp-content/uploads/2021/04/glofox-logo-black.svg" className="header__logo-img" alt="glofox-logo-black" loading="lazy" height="32" width="124" />
        </a>

        {/* nav */}
        <nav className="header__menu">
            <a href="#" className="header__menu-item">Item</a>
            <a href="#" className="header__menu-item">Item</a>
            <a href="#" className="header__menu-item">Item</a>
            <a href="#" className="header__menu-item">Item</a>
            <a href="#" className="header__menu-item">Item</a>
            <a href="#" className="header__menu-item">Item</a>
        </nav>

        <button className="header__btn">Submit</button>
      </div>
    </header>

  );
}
