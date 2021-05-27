import Card from 'components/Card';

const Home = ({ movies }) => {
  console.log(movies);

  return (
    <>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

export default Home;
