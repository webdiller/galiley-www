import DefaultLayout from "@/components/defaultLayout";
import { HiCheckCircle } from "react-icons/hi";
export default function Contacts() {
  return (
    <DefaultLayout title="Контакты">
      <main>
        <h1 className="container container_main ui-title">Контакты</h1>

        <div className="about">
          <div className="container about__wrapper">
            {/* <p className="ui-title ui-title_2 about__title">О нас</p> */}
            <div className="about__content">
              <div className="about__left">
                {/* <p className="ui-title ui-title_3 about__subtitle">Brand & marketing tools</p> */}
                <p className="ui-text about__text">
                  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное решила запятых его скатился? Не наш парадигматическая буквоград свой!
                </p>

                <div className="ui-list about__list">
                  <p className="ui-list__title">Контакты:</p>
                  <ul className="ui-list__items">
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Для Москвы и области: <a href="#">+7 999 999 99 99</a>
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Для регионов России: <a href="#">+7 999 999 99 99</a>
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> E-mail: <a href="#">xxx@xxx.ru</a>
                    </li>
                  </ul>
                </div>


                <div className="ui-list about__list">
                <p className="ui-list__title">Наши реквизиты:</p>
                  <ul className="ui-list__items">
                    <li className="ui-list__item">ИНН XXXXXXXXX</li>
                    <li className="ui-list__item">КПП XXXXXXXXX</li>
                    <li className="ui-list__item">ОГРН XXXXXXXXX</li>
                  </ul>
                </div>


                
              </div>
              <div className="about__media">
                <img
                  src="https://www.glofox.com/wp-content/uploads/2021/07/home-hero-image4.jpg"
                  alt=""
                  className="about__img"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
