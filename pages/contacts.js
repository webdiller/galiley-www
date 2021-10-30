import DefaultLayout from "@/components/defaultLayout";
import { AiFillPhone, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

// import Image from "next/image";
import ContactForm from "../components/contactForm";

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
                {/* TODO: Расскоментировать, когда будет готово */}

                {/* <p className="ui-title ui-title_3 about__subtitle">Brand and marketing tools</p> */}
                {/* <p className="ui-text about__text">
                  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Единственное решила запятых его скатился? Не наш парадигматическая
                  буквоград свой!
                </p> */}

                <div className="ui-list ui-list_vertical about__list">
                  {/* <p className="ui-list__title">Контакты:</p> */}
                  <ul className="ui-list__items">
                    <li className="ui-list__item">
                      <AiFillPhone className="ui-list__icon" /> Михаил Колотушин:
                      <a href="tel:+79215716057">+7 921 571 60 57</a>
                    </li>
                    <li className="ui-list__item">
                      <AiOutlineWhatsApp className="ui-list__icon" /> Михаил Колотушин:
                      <a href="https://api.whatsapp.com/send?phone=+79215716057">
                        +7 921 571 60 57
                      </a>
                    </li>
                    <li className="ui-list__item">
                      <AiOutlineMail className="ui-list__icon" /> E-mail:{" "}
                      <a href="mailto:kolotushintechnologies@gmail.com">
                        kolotushintechnologies@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="ui-list about__list">
                  <p className="ui-list__title">Наши реквизиты:</p>
                  <ul className="ui-list__items">
                    <li className="ui-list__item">ИП КОЛОТУШИН М.Г.</li>
                    <li className="ui-list__item">ИНН 250805330104</li>
                    <li className="ui-list__item">ОГРНИП 321253600069732</li>
                  </ul>
                </div>
              </div>
              <div className="about__media">
                <img src="/illustration-3.svg" alt="image-placeholder" className="about__img" />
                {/* <Image
                  src="/image-placeholder.jpg"
                  alt=""
                  className="about__img"
                  objectFit="cover"
                  layout="intrinsic"
                  width={450}
                  height={300}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </main>
    </DefaultLayout>
  );
}
