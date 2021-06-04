import { useRouter } from 'next/router';

const MoviesPage = ({ movies, page, numberOfMovies }) => {
  const router = useRouter();

  const lastPage = Math.ceil(numberOfMovies / 3);

  return (
    <div className="container">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
          </li>
        ))}
      </ul>

      <div className="buttons">
        <button
          onClick={() => router.push(`/movies?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/movies?page=${page + 1}`)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .container {
          padding-top: 1rem;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          max-width: 300px;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3; // if page = 1, starts from 0, else starts from +3 from the current page

  const numberOfMoviesResponse = await fetch(`${API_URL}/movies/count`);
  const numberOfMovies = await numberOfMoviesResponse.json();

  const res = await fetch(`${API_URL}/movies?_limit=3&_start=${start}`);
  const data = await res.json();

  return {
    props: {
      movies: data,
      page: +page,
      numberOfMovies,
    },
  };
}

export default MoviesPage;
