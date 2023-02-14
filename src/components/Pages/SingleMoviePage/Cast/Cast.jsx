import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'components/shared/services/api';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieById(id);
        setCast(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, []);
  console.log(cast);

  return (
    <>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt="poster"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
