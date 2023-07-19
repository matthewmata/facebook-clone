import ImageCircle from "../UI/ImageCircle";
import Highlight from "../UI/Highlight";
import Likes from "../SVG/Likes";

import classes from "./Post.module.scss";

const Post = ({
  name,
  timestamp,
  profilePicture,
  text,
  image,
  likes,
  comments,
  id,
  IconSVG,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ImageCircle picture={profilePicture} size={40} altName="profile" />
        <div className={classes.header__details}>
          <h2>{name}</h2>
          <span className={classes.timestamp}>
            <h3>{timestamp} ·</h3>
            <IconSVG />
          </span>
        </div>
      </div>
      <p>{text}</p>
      {image && <img src={image} alt={id}></img>}
      <div className={classes.likesAndComments}>
        <div className={classes.likes}>
          <Likes />
          <span>{likes}</span>
        </div>
        <div className={classes.comments}>
          {comments} <span>comments</span>
        </div>
      </div>
      <hr></hr>
      <div className={classes.buttons}>
        <Highlight>
          <div className={classes.icon}>
            <i className={classes.like}></i>
            <span>Like</span>
          </div>
        </Highlight>
        <Highlight>
          <div className={classes.icon}>
            <i className={classes.comment}></i>
            <span>Comment</span>
          </div>
        </Highlight>
        <Highlight>
          <div className={classes.icon}>
            <i className={classes.share}></i>
            <span>Share</span>
          </div>
        </Highlight>
      </div>
    </div>
  );
};

export default Post;
