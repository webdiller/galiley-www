import DefaultLayout from "@/components/defaultLayout";
import { FaSquarespace, FaFlagCheckered, FaIndustry } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";

export default function Services() {
  return (
    <DefaultLayout title="Истина">
      <main>
        <h1 className="container container_main ui-title">Истина</h1>

        <div className="features">
          <div className="container features__wrapper">
            <div className="ui-text features__description">
              В первую очередь для нас важны все сферы жизни человека. <br /> Являясь в основном на
              сегодняшний день компанией, которая занимается разработкой Прикладного ПО, <br /> мы с
              уверенностью заявляем о том, что это не конец наших компетенций. <br /> Мы идем вперед
              навстречу новым свершениям.
              <br />
              <br />
              Наша компания распределена на несколько отделов, которые позволяют осуществить мечты
              любых сфер жизни человека:
            </div>
            <div className="features__items features__items_4">
              <div className="features__item">
                <FaSquarespace className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">
                  Отдел <br /> Информационных Технологий
                </p>
                {/* <p className="ui-text features__item-text">
                Отдел Информационных Технологий
                </p> */}
              </div>

              <div className="features__item">
                <FaFlagCheckered className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">Отдел <br /> Стартапов</p>
                {/* <p className="ui-text features__item-text">
                Отдел Стартапов
                </p> */}
              </div>

              <div className="features__item">
                <FaIndustry className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">
                  Отдел <br /> Промышленных Технологий
                </p>
                <p className="ui-text features__item-text">(В Разработке)</p>
              </div>

              <div className="features__item">
                <BiTransfer className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">Отдел <br /> Логистики</p>
                <p className="ui-text features__item-text">(В Разработке)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="vertical-blocks">
          <div className="container vertical-blocks__wrapper">
            <div className="vertical-blocks__item">
              <p className="ui-title ui-title_6 vertical-blocks__title">
                Отдел Информационных Технологий (ОИТ)
              </p>
              <p className="ui-text vertical-blocks__description">
                Позволяет разработать любые решения как для Бизнесов, так и для человеческих нужд.
                Мы не фокусируемся только на разработке каких-либо Бизнес-Решений, мы делаем,
                создаем и изобретаем различного рода проекты, которые уже сегодня помогают нашим
                партнерам улучшить свою жизнь.
              </p>
            </div>

            <div className="vertical-blocks__item">
              <p className="ui-title ui-title_6 vertical-blocks__title">Отдел Стартапов (ОС)</p>
              <p className="ui-text vertical-blocks__description">
                В основном ставит перед собой задачу реализации и проверки гипотез в сфере
                Информационных Технологий и не только. Как и другие представители стартапов, мы
                являемся представителями своих. В Отделе Стартапов(ОС) мы объединяем силы сторонних
                предпринимателей со своими и реализуем наши идеи, гипотезы, а после уже проверенные
                проекты для достижения Развития наших отдельных стартапов. Для того, чтобы вступить
                в нашу команду, Вы можете отправить письмо на наш Email-Адрес
                kolotushintechnologies@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
