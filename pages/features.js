import DefaultLayout from "@/components/defaultLayout";
import { IoIosSpeedometer } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";

export default function Features() {
  return (
    <DefaultLayout title="Преимущества">
      <main>
        <h1 className="container container_main ui-title">Преимущества работы с нами</h1>
        {/* BLOCK: Features */}
        <div className="features">
          <div className="container features__wrapper">
            <div className="ui-text features__description">
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
              Над жаренные свое страна вскоре запятой текстов взгляд рыбными на берегу буквоград
              приставка заманивший дорогу буквенных рукопись, несколько наш подпоясал семь дал
              вдали. Вскоре, всемогущая! Безорфографичный свой, вскоре наш маленький злых себя семь
              предупреждал грустный осталось, использовало не подпоясал города от всех!
            </div>
            <div className="features__items">
              <div className="features__item">
                <IoIosSpeedometer className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">Скорость</p>
                <p className="ui-text features__item-text">
                  Мы работаем, используя передовые подходы к разработке, что позволяет в кратчайшие
                  сроки (2-4 недели) запустить ваш продукт.
                </p>
              </div>

              <div className="features__item">
                <MdHighQuality className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">Качество</p>
                <p className="ui-text features__item-text">
                  Наши специалисты находятся на рубеже информационных технологий и постоянно
                  оттачивают свои навыки, чтобы всегда предоставлять решения, соответствующие
                  современным требованиям качества
                </p>
              </div>

              <div className="features__item">
                <MdHighQuality className="features__item-icon" />
                <p className="ui-title ui-title_6 features__item-title">Опыт</p>
                <p className="ui-text features__item-text">
                  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Он толку обеспечивает свое букв страна знаках! Раз заманивший домах вдали
                  путь рот журчит сбить.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
