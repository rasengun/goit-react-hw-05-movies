import { memo } from 'react';

import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

import s from './movieList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title }) => (
    <Link
      className={s.link}
      to={`/movies/${id}`}
      state={{ from: location }}
      key={id}
    >
      <p>{title}</p>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

export default memo(MoviesList);

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
