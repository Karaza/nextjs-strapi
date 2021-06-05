import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

const Movie = ({ movie }) => {
  console.log(movie);

  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: movie.description,
    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: movie.description,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <h2>{movie.title}</h2>
        <div>
          <p dangerouslySetInnerHTML={{ __html: movie.description }} />
        </div>

        <style jsx>{`
          h2 {
            margin: 1rem 0;
          }
        `}</style>
      </div>
    </>
  );
};

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`);
  const data = await res.json();

  return {
    props: {
      movie: data[0],
    },
  };
}

export default Movie;
