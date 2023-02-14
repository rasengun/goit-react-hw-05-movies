import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'components/shared/services/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(id);
        setReviews(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCast();
  }, [id]);
  console.log(reviews);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li id={id}>
            <p>`{content}`</p>
            <h3>Author: {author}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
