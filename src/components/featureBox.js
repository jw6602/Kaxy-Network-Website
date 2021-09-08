import "./featureBox.scoped.css";

function featureBox(props) {
  return (
    <div className="feature-box">
      <img src={props.imgSrc} alt="" />
      <div className="featureheader">{props.header}</div>
      <div className="featuretexts">{props.text}</div>
    </div>
  );
}

export default featureBox;
