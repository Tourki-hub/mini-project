import React from "react";

const PostCard = ({
  id = "1",
  title = "Car",
  image = "",
  description,
  likes,
}) => {
  return (
    <div className="Card">
      <img className="imagePost" src={image} alt={title} />
      {title}
      {description}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "260px",
        }}
      >
        <div className="numberOfLikes"> {likes}</div>
        <button className="like-button">Like</button>
      </div>
    </div>
  );
};

export default PostCard;
