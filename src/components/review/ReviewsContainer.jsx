// reviews/ReviewsContainer.jsx
import { reviewsData } from './reviewsData';
import ReviewsClient from './ReviewsClient';

const ReviewsContainer = () => {
  return (
    <>
      <div className='sr-only'>
        <h3>Client Testimonials</h3>
        {reviewsData.map((review, idx) => (
          <article key={idx}>
            <h4>Review from {review.name}</h4>
            <p>Rating: {review.rating}/5 stars</p>
            <p>{review.text}</p>
          </article>
        ))}
      </div>

      <ReviewsClient reviewsData={reviewsData} />
    </>
  );
};

export default ReviewsContainer;
