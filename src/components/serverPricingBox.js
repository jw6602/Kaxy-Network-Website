import "./serverPricingBox.scoped.css";
import Buttons from "../components/button";
function ServerPricingBox(props) {
  return (
    <div className="server-pricing-box">
      <div className="border">
        <div className="details">{props.time}</div>
        <div className="feature-cost">
          {props.cost} <span>{props.extended}</span>
        </div>
      </div>
      <Buttons
        text="Purchase"
        className={props.stock ? "" : "no-stock"}
        disabled={props.stock ? false : true}
        onClick={() => {
          window.location = props.purchaseLink;
        }}
      />
    </div>
  );
}

export default ServerPricingBox;
