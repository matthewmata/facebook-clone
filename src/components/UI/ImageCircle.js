import classes from "./ImageCircle.module.scss";

const ImageCircle = ({ picture, size, altName }) => {
  var imageSize = {};
  if (size) {
    imageSize.height = size;
    imageSize.width = size;
  }

  return (
    <div>
      <img className={classes.image} style={imageSize} src={picture} alt={altName}></img>
    </div>
  );
};

export default ImageCircle;
