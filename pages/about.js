import DefaultLayout from "@/components/defaultLayout";
import { IoIosSpeedometer } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";

import { BsKey } from "react-icons/bs";
import { MdOutlineIntegrationInstructions, MdArchitecture } from "react-icons/md";
import illustration_1 from '@/base/illustration-1.svg';
import illustration_2 from '@/base/illustration-2.svg';
import Image from "next/image";

export default function About() {
  return (
    <DefaultLayout title="О нас">
      <main>
        <h1 className="container container_main ui-title">О нас</h1>

        {/* BLOCK: Title with description */}
        <div className="title-with-description">
          <div className="container title-with-description__wrapper">
            <div className="title-with-description__content">
              {/* TODO: Расскоментировать когда будет контент */}
              {/* <h2 className="ui-title ui-title_2 title-with-description__title">Why is a Good Membership Retention Strategy so Important?</h2> */}
              <div className="title-with-description__content">
                <p className="ui-text title-with-description__text">
                  Группа “Galiley Enterprise” в Отделе Информационных Технологий занимается
                  разработкой <strong>Web-Приложений</strong>, <strong>мобильных приложений</strong>
                  , <strong>внедрением ERP</strong>, <strong>CRM</strong>, <strong>ECM</strong> и
                  прочих потребностей заказчиков для автоматизации бизнесов и бизнес-процессов. К
                  нам обращаются, чтобы заказать проект приложения под ключ или сэкономить на нем
                  время разработки и ресурсы, выбрав готовый вариант, для того, чтобы его можно было
                  подстроить под компанию.
                </p>
                <div className="ui-list about__list about__list_alt">
                  <p className="ui-list__title">Проекты под ключ могут включать в себя</p>
                  <ul className="ui-list__items">
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Определение проблемы
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Выработка требований
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Создание плана
                      конструирования(Технического Задания)
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Разработка архитектуры ПО, или
                      высокоуровневое проектирование
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Детальное проектирование
                    </li>
                    <li className="ui-list__item">
                      <HiCheckCircle className="ui-list__icon" /> Конструирование ПО, в которое
                      входит еще множество этапов, связанных с тестированием, интеграцией, а также
                      самим сопровождением ПО
                    </li>
                  </ul>
                </div>
                <p className="ui-text title-with-description__text">
                  Наш Отдел Информационных Технологий работает с 2020-го года, до этого мы работали
                  как команда разработчиков, и за все общее время работы мы преуспели в разработке
                  многих систем, о которых можно больше узнать в Портфолио Galiley Enterprise ОИТ.
                </p>
              </div>
            </div>
            <div className="title-with-description__media">
              <Image
                src={illustration_1}
                alt="Иллюстрационная картинка"
                layout="responsive"
              />
            </div>
          </div>
        </div>

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


      </main>
    </DefaultLayout>
  );
}
