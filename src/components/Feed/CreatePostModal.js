import { useState } from "react";

import ImageCircle from "../UI/ImageCircle";

import classes from "./CreatePostModal.module.scss";

import Joel from "../../images/joel.jpeg";
import Friends from "../../images/icon-friends.png";
import FriendsSVG from "../SVG/Friends";

const CreatePostModal = ({ isOpen, handleClose, setFeedItems }) => {
  const [count, setCount] = useState(3);
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    const post = {
      name: "Joel",
      timestamp: "now",
      profilePicture: Joel,
      IconSVG: FriendsSVG,
      text: postText,
      likes: 0,
      comments: 0,
      id: `Joel-${count}`,
    };
    setCount((prev) => prev + 1);
    setFeedItems((prev) => [post, ...prev]);
    handleClose();
  };

  return (
    <>
      <div className={classes["header-container"]}>
        <div className={classes.header}>
          <ImageCircle picture={Joel} size={40} altName="profile" />
          <div className={classes.header__details}>
            <h2>Joel Miller</h2>
            <span className={classes["post-audience"]}>
              <img
                className={classes["friends-icon"]}
                src={Friends}
                width="12"
                height="12"
                alt="Friends"
              ></img>
              <h4>Friends</h4>
              <i className={classes["more-icon"]}></i>
            </span>
          </div>
        </div>
      </div>
      <textarea
        className={classes["modal-text-area"]}
        placeholder="What's on your mind Joel?"
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      {postText.length > 0 ? (
        <button className={classes["post-btn"]} onClick={() => handlePost()}>
          <span>Post</span>
        </button>
      ) : (
        <button
          className={`${classes["post-btn"]} ${classes["post-btn-empty"]}`}
        >
          <span>Post</span>
        </button>
      )}
    </>
  );
};

export default CreatePostModal;
