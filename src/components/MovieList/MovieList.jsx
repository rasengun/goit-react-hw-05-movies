import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const elements = movies.map(({ id, title }) => (
    <Link to={`/movies/${id}`} key={id}>
      <p>{title}</p>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default MoviesList;
