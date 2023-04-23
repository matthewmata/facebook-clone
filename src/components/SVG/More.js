import classes from "./SVG.module.scss";

const More = ({ isActive }) => {
var svgActive = isActive ? classes["svg-icon-focus"] : classes["svg-icon"];

  return (
    <svg viewBox="0 0 28 28" className={svgActive} height="28" width="28">
      <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
    </svg>
  );
};

export default More;
