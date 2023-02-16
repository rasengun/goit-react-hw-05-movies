import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/shared/services/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>`{content}`</p>
    </li>
  ));

  return (
    <>
      <ul>
        {elements.length === 0
          ? "We don't have any reviews for this movie"
          : elements}
      </ul>
    </>
  );
};

export default Reviews;
