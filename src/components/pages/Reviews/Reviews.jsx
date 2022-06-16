import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onGetReviews } from "../../../api-service";
import ReviewsItem from "./ReviewsItem";

export const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const showReviews = async () => {
      try {
        const reviewsObj = await onGetReviews(id);
        setReviews(reviewsObj);
      } catch (error) {
        alert("Oooops....something break");
      }
    };
    showReviews();
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id} author={author} reviews={content} />
          ))}
        </ul>
      ) : (
        <p>Nobody leave the review</p>
      )}
    </>
  );
};
