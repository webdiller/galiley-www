import DefaultLayout from "@/components/defaultLayout";
import Link from "next/link";
import Image from 'next/image'
export default function News({data}) {

  const api = process.env.NEXT_PUBLIC_LOCAL_API
  
  return (
    <DefaultLayout title="Новости и события">
      <main>
        <h1 className="container container_main ui-title">Новости и события</h1>
        
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
              {data.map(({ id, title, content, slug, image }) => 
                <Link key={id} href={`/news/${slug}`}>
                  <div className="ui-cards__item">
                  {/* <img 
                    src={`${api}${image.formats.medium.url}`}
                    alt={`${api}${image.formats.medium.name}`}
                    className="ui-cards__img"
                  /> */}
                  <Image
                  width={400}
                  height={400}
                  src={`${api}${image.formats.medium.url}`}
                  alt={`${api}${image.formats.medium.name}`}
                  className="ui-cards__img"
                  // src="/img2.webp"
                  />
                  <p className="ui-title ui-title_6 ui-cards__title">{title}</p>
                  <p className="ui-cards__description">{content}</p>
                </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getStaticProps = async () => {
  const data = await fetch("http://localhost:1337/articles");

  if (!data) {
    return {
      notFound: true,
      props: {}
    };
  }

  const res = await data.json();

  return {
    props: {
      data: res,
      revalidate: 10,
    }
  };
};
