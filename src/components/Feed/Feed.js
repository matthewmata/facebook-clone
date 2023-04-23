import CreatePost from "./CreatePost";
import classes from "./Feed.module.scss";
import Post from "./Post";
import FEED_ITEMS from "./feed-items";

const Feed = () => {
  return (
    <div className={classes.feed__container}>
      <div className={classes.gaps}>
        <CreatePost />
        {FEED_ITEMS.map((post) => (
          <Post 
            key={post.id}
            name={post.name}
            timestamp={post.timestamp}
            profilePicture={post.profilePicture}
            IconSVG={post.IconSVG}
            text={post.text}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
