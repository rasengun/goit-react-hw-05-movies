import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ results }) => {
  const elements = results.map(({ id, title }) => (
    <li key={id}>
      <p>{title}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default TrendingMoviesList;
