import DefaultLayout from "@/components/defaultLayout";
export default function News({ article }) {
  const api = process.env.NEXT_PUBLIC_API;

  return (
    <DefaultLayout title="Новости и события">
      <main>
        <h1 className="container container_main ui-title">{article.title}</h1>
        <div className="container content">
          {/* TODO: Настроить в страпи преобразование конента */}
          <p>{article.content}</p>
        </div>
      </main>
    </DefaultLayout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/articles");
  const articles = await res.json();
  // const paths = articles.map(article => `/news/${article.slug}`);
  const paths = articles.map(article => ({ params: { slug: article.slug.toString() } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:1337/articles/${params.slug}`);
  const article = await res.json();

  return {
    props: {
      article,
      revalidate: 10
    }
  };
};
