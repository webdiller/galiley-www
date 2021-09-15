import CustomHead from "@/components/customHead";
import DefaultLayout from "@/components/defaultLayout";

export default function Home() {
  return (
    <DefaultLayout title="Главная">
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
                <img
                  src="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="ui-cards__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="https://images.pexels.com/photos/4916705/pexels-photo-4916705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="ui-cards__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="https://images.pexels.com/photos/6373667/pexels-photo-6373667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="ui-cards__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="https://images.pexels.com/photos/6373405/pexels-photo-6373405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="ui-cards__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>

              <div className="ui-cards__item">
                <img
                  src="https://images.pexels.com/photos/7034591/pexels-photo-7034591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="ui-cards__img"
                />
                <p className="ui-title ui-title_6 ui-cards__title">HIIT and fitness studios</p>
                <p className="ui-cards__description">
                  Manage your studio and boost your brand with our powerful fitness management
                  software.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK: Title with description */}
        <div className="title-with-description">
          <div className="container title-with-description__wrapper">
            <h2 className="ui-title ui-title_2 title-with-description__title">
              Why is a Good Membership Retention Strategy so Important?
            </h2>
            <div className="title-with-description__content">
              <p className="ui-text title-with-description__text">
                With the changing landscape of the fitness industry, especially in the last few
                months, it’s important to reflect on your retention strategy. As many brands have
                pivoted to a hybrid fitness business, your retention strategy needs to encompass
                this move in a way that allows you to deliver excellent customer service and member
                experience online and offline.
              </p>
              <p className="ui-text title-with-description__text">
                An excellent membership retention strategy is at the heart of a buzzing and
                successful fitness business. It’s in everything from your onboarding strategy to the
                way you interact with your members at every point in the sales journey. Member
                retention is about more than just increasing the bottom line, it’s creating a
                stellar experience that not only retains members but attracts new ones. You need a
                systemized process strategy that takes a stranger to a paying and loyal member.
              </p>
              <p className="ui-text title-with-description__text">
                Here are a few key reasons why it’s important.
              </p>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>

    // <div>
    //
    // </div>
  );
}
