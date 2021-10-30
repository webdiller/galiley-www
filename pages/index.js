import DefaultLayout from "@/components/defaultLayout";
import { IoIosSpeedometer } from "react-icons/io";
import { BsKey } from "react-icons/bs";
import { MdOutlineIntegrationInstructions, MdArchitecture } from "react-icons/md";
// import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout title="Главная">
      <main>
        <div className="welcome">
          <div className="container welcome__wrapper">
            <div className="welcome__content">
              <h1 className="ui-title welcome__title">
                Galiley Enterprise - Технологическая компания, которая занимается внедрением
                цифровых решений в бизнесе
              </h1>
              <p className="ui-text welcome__subtitle">
                Технологии - с помощью них мы можем упростить нашу жизнь.
              </p>
              {/* TODO: Расскоментировать, когда будет контент */}
              {/* <button className="ui-btn ui-btn_animated welcome__btn">Our showcases</button> */}
            </div>
            <div className="welcome__media">
              <img src="/illustration-1.svg" alt="image-placeholder" className="welcome__img" />
              {/* <Image
                src="/image-placeholder.jpg"
                alt=""
                className="welcome__img"
                objectFit="cover"
                layout="intrinsic"
                width={800}
                height={800}
              /> */}
            </div>
          </div>
        </div>

        <div className="horizontal-blocks">
          <div className="container horizontal-blocks__wrapper">
            <div className="horizontal-blocks__item">
              <p className="ui-title ui-title_6 horizontal-blocks__title">Наша задача</p>
              <p className="ui-text horizontal-blocks__description">
                Автоматизация любых бизнесов в сфере Информационных Технологий
              </p>
            </div>
            <div className="horizontal-blocks__item">
              <p className="ui-title ui-title_6 horizontal-blocks__title">Наша цель</p>
              <p className="ui-text horizontal-blocks__description">
                Создать Технологическую компанию, которая занимается развитием всех сфер нашей
                жизни.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK: Designed for fitness tailored to you */}
        {/* <div className="title-with-cards">
          <div className="container title-with-cards__wrapper">
            <div className="title-with-cards__top">
              <h2 className="ui-title ui-title_2 title-with-cards__title">
                Designed for fitness tailored to you
              </h2>
              <p className="title-with-cards__text ui-text">
                Developed by fitness entrepreneurs for fitness entrepreneurs, we have built
                best-in-class management software to cater to the specific needs of fitness
                businesses. Whether you own one location or one thousand, we offer a selection of
                plans and innovative tools to suit your needs.
              </p>
            </div>

            <div className="ui-cards title-with-cards__cards">
              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="/image-placeholder.jpg"
                  alt="image-placeholder"
                  className="welcome__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* BLOCK: Title with description */}
        {/* TODO: Расскоментировать когда появится контент */}
        {/* <div className="title-with-description">
          <div className="container title-with-description__wrapper">
            <div className="title-with-description__content">
              <h2 className="ui-title ui-title_2 title-with-description__title">
                Why is a Good Membership Retention Strategy so Important?
              </h2>
              <div className="title-with-description__content">
                <p className="ui-text title-with-description__text">
                  With the changing landscape of the fitness industry, especially in the last few
                  months, it’s important to reflect on your retention strategy. As many brands have
                  pivoted to a hybrid fitness business, your retention strategy needs to encompass
                  this move in a way that allows you to deliver excellent customer service and
                  member experience online and offline.
                </p>
                <p className="ui-text title-with-description__text">
                  An excellent membership retention strategy is at the heart of a buzzing and
                  successful fitness business. It’s in everything from your onboarding strategy to
                  the way you interact with your members at every point in the sales journey. Member
                  retention is about more than just increasing the bottom line, it’s creating a
                  stellar experience that not only retains members but attracts new ones. You need a
                  systemized process strategy that takes a stranger to a paying and loyal member.
                </p>
                <p className="ui-text title-with-description__text">
                  Here are a few key reasons why it’s important.
                </p>
              </div>
            </div>
            <div className="title-with-description__media">
              <img
                src="/image-placeholder.jpg"
                alt="image-placeholder"
                className="title-with-description__img"
              />
            </div>
          </div>
        </div> */}

        {/* BLOCK: Features */}
        <div className="features">
          <div className="container features__wrapper">
            <p className="ui-title ui-title_2 features__title">Преимущества работы с нами</p>
            <div className="features__items">
              <div className="features__item">
                <IoIosSpeedometer className="features__item-icon" />
                {/* <p className="ui-title ui-title_6 features__item-title">Скорость</p> */}
                <p className="ui-text features__item-text">
                  Разработка различных интеграционных систем, CRM, ERP, ECM за промежуток от 1-го до
                  2-х месяцев, благодаря своему опыту подобных работ и наличию готовых модулей для
                  решения проблем.
                </p>
              </div>

              <div className="features__item">
                <MdArchitecture className="features__item-icon" />
                {/* <p className="ui-title ui-title_6 features__item-title">Качество</p> */}
                <p className="ui-text features__item-text">
                  Профессиональная разработка архитектуры ПО, куда входит разработка и
                  проектирование всех макетов и других составляющих дизайна проекта, мы владеем
                  командой профессионалов, куда входят архитекторы ПО, UI/UX Дизайнеры, Web и
                  мобильные разработчики
                </p>
              </div>

              <div className="features__item">
                <BsKey className="features__item-icon" />
                {/* <p className="ui-title ui-title_6 features__item-title">Опыт</p> */}
                <p className="ui-text features__item-text">
                  Разработка проекта под ключ. В нашем Отделе Информационных Технологий реализуют
                  мечты. Создание плана конструирования(Технического Задания) производится
                  бесплатно, с условием если за реализацию проекта возьмемся мы, Galiley Enterprise.
                  С нашим планом конструирования(Техническим Заданием) проект сможет реализовать
                  любой грамотный разработчик или команда разработчиков.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK: About us */}
        <div className="about">
          <div className="container about__wrapper">
            <p className="ui-title ui-title_2 about__title">О нас</p>
            <div className="about__content">
              <div className="about__left">
                {/* TODO: Расскоментировать когда будет контент */}
                {/* <p className="ui-title ui-title_3 about__subtitle">Brand and marketing tools</p> */}

                <p className="ui-text about__text">
                Группа “Galiley Enterprise” в Отделе Информационных Технологий занимается
                  разработкой <strong>Web-Приложений</strong>, <strong>мобильных приложений</strong>, <strong>внедрением ERP</strong>, <strong>CRM</strong>, <strong>ECM</strong> и
                  прочих потребностей заказчиков для автоматизации бизнесов и бизнес-процессов. К
                  нам обращаются, чтобы заказать проект приложения под ключ или сэкономить на нем
                  время разработки и ресурсы, выбрав готовый вариант, для того, чтобы его можно было
                  подстроить под компанию.
                </p>

                {/* TODO: Расскоментировать когда будет контент */}
                {/* <div className="ui-list about__list">
                  <p className="ui-list__title">Explore Marketing Tools</p>
                  <ul className="ui-list__items">
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Lead capture and social
                      integrations
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Automated messaging and push
                      notifications
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Custom mobile member experience
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="about__media">
                <img src="/illustration-2.svg" alt="image-placeholder" className="about__img" />
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
      </main>
    </DefaultLayout>
  );
}
