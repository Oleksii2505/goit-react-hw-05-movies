import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewsList } from './Reviews.styled';
import { fetchMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const normalizedReviews = arr => {
    return arr.map(({ id, content }) => ({
      id,
      content,
    }));
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        setReviews(normalizedReviews(results));

      } catch (err) {
        console.log(err.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsList>
      {!reviews.length ? (
        <p className="msg">Probably there are no reviews</p>
      ) : (
        reviews.map(({ id, content }) => {
          return (
            <ReviewItem key={id}>
              <p>{content}</p>
            </ReviewItem>
          );
        })
      )}
    </ReviewsList>
  );
};

export default Reviews;