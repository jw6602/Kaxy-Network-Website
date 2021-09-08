import { Link } from "react-router-dom";
import Buttons from "./button";
import "./productBox.scoped.css";

function featureBox(props) {
  return (
    <div className="box">
      <img src={props.imgSrc} alt="" />
      <div className="info">
        <div className="text1"> {props.text1}</div>
        <div className="text2">{props.text2}</div>
      </div>
      <Link to={props.to}>
        <Buttons text="Learn More" />
      </Link>
    </div>
  );
}

export default featureBox;
