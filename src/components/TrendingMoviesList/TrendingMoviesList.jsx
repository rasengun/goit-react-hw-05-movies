import { Link } from 'react-router-dom';

import s from './trendingMoviesList.module.css';

const TrendingMoviesList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <Link className={s.link} to={`/movies/${id}`} key={id}>
      <p>{title}</p>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default TrendingMoviesList;
