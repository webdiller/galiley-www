import CustomHead from "@/components/customHead";
export default function Home() {
  return (
    <div>
      <CustomHead />
      <main className="main">
        <h1 className="container container_main ui-title">Главная</h1>

        {/* BLOCK: Designed for fitness tailored to you */}
        <div className="title-with-cards">
          <div className="container title-with-cards__wrapper">

            <div className="title-with-cards__top">
              <h2 className="ui-title ui-title_2 title-with-cards__title">
                Designed for fitness tailored to you
              </h2>
              <p className="title-with-cards__text ui-text">
                Developed by fitness entrepreneurs for fitness entrepreneurs, we've built
                best-in-class management software to cater to the specific needs of fitness
                businesses. Whether you own one location or one thousand, we offer a selection of
                plans and innovative tools to suit your needs.
              </p>
            </div>

            <div className="ui-cards title-with-cards__cards">
              <div className="ui-cards__item">
                <img src="https://www.glofox.com/wp-content/uploads/2021/07/yoga-pilates-barre.jpg" alt="" className="ui-cards__img" />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">Manage your studio and boost your brand with our powerful fitness management software.</p>
              </div>

                <div className="ui-cards__item">
                <img src="https://www.glofox.com/wp-content/uploads/2021/07/hiit-and-finess-studios.jpg" alt="" className="ui-cards__img" />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">Manage your studio and boost your brand with our powerful fitness management software.</p>
              </div>

                <div className="ui-cards__item">
                <img src="https://www.glofox.com/wp-content/uploads/2021/07/hiit-and-finess-studios.jpg" alt="" className="ui-cards__img" />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">Manage your studio and boost your brand with our powerful fitness management software.</p>
              </div>

                <div className="ui-cards__item">
                <img src="https://www.glofox.com/wp-content/uploads/2021/07/hiit-and-finess-studios.jpg" alt="" className="ui-cards__img" />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">Manage your studio and boost your brand with our powerful fitness management software.</p>
              </div>

                <div className="ui-cards__item">
                <img src="https://www.glofox.com/wp-content/uploads/2021/07/hiit-and-finess-studios.jpg" alt="" className="ui-cards__img" />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">Manage your studio and boost your brand with our powerful fitness management software.</p>
              </div>
            
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
