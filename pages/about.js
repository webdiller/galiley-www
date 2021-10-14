import DefaultLayout from "@/components/defaultLayout";
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
              <h2 className="ui-title ui-title_2 title-with-description__title">
                Why is a Good Membership Retention Strategy so Important?
              </h2>
              <div className="title-with-description__content">
                <p className="ui-text title-with-description__text">
                  Описание Далеко-далеко за словесными горами в стране гласных и согласных живут
                  рыбные тексты. Грамматики всемогущая, переулка что коварных составитель домах
                  живет послушавшись вскоре своих текстами мир деревни решила оксмокс меня себя
                  снова необходимыми рекламных грустный о бросил свою назад языкового. Предложения
                  языкового своего подпоясал себя жаренные. Раз журчит напоивший его снова, моей
                  сбить?
                </p>
                <p className="ui-text title-with-description__text">
                  Описание Далеко-далеко за, словесными горами в стране гласных и согласных живут
                  рыбные тексты. О, точках? Скатился свой языком переписали, имени выйти заголовок,
                  буквоград раз до, заманивший подпоясал ручеек пор родного. Осталось, свой
                  большого.
                </p>
                <p className="ui-text title-with-description__text">
                  Описание Далеко-далеко за словесными, горами в стране гласных и согласных живут
                  рыбные тексты. Точках, последний lorem? Ты, пор!
                </p>
                <p className="ui-text title-with-description__text">
                  Here are a few key reasons why it’s important.
                </p>
              </div>
            </div>
            <div className="title-with-description__media">
              <Image
                src="/image-placeholder.jpg"
                alt=""
                className="title-with-description__img"
                objectFit="cover"
                layout="intrinsic"
                width={450}
                height={300}
              />
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
