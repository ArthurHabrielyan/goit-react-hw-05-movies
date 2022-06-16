export const ReviewsItem = ({ author, reviews }) => {
  return (
    <li>
      <h2> Author: {author}</h2>
      <p>{reviews}</p>
    </li>
  );
};
