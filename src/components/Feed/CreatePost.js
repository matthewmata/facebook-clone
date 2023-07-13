import Card from "../UI/Card";
import ImageCircle from "../UI/ImageCircle";
import Highlight from "../UI/Highlight";

import classes from "./CreatePost.module.scss";

import Joel from "../../images/joel.jpeg";
import FeelingActivity from "../../images/icon-feeling-activity.png";
import LiveVideo from "../../images/icon-live-video.png";
import PhotoVideo from "../../images/icon-photo-video.png"


const CreatePost = () => {
  return (
    <Card>
      <div className={classes["create-post"]}>
        <div className={classes.input__container}>
          <ImageCircle picture={Joel} size={40} alt="Joel" />
          <div className={classes.input}>What's on your mind, Joel?</div>
        </div>
        <hr></hr>
        <div className={classes.buttons__container}>
          <Highlight>
            <div className={classes.icon}>
              <img src={LiveVideo} alt="Live Video"></img>
              <span>Live Video</span>
            </div>
          </Highlight>
          <Highlight>
            <div className={classes.icon}>
              <img src={PhotoVideo} alt="Video Icon"></img>
              <span>Photo/Video</span>
            </div>
          </Highlight>
          <Highlight>
            <div className={classes.icon}>
              <img src={FeelingActivity} alt="Feeling/Activity"></img>
              <span>Feeling/Activity</span>
            </div>
          </Highlight>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost
