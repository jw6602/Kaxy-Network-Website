import Buttons from "../components/button";
import "./frontPage.scoped.css";
function frontPage(props) {
  return (
    <div
      className={`front-page hero container jc-ce flex-col text-focus-in  ${
        props.dash ? "m-b" : <></>
      }`}
    >
      <div className="mob-center">
        <div className="bg-custom">
          <div className="bubble rellax" />
          <div className="bubble2" />
          <div className="bubble3" />
        </div>
        <div className="primary-text ">{props.primaryText}</div>
        <div className="sec-text  ">{props.secText}</div>
        <a href={props.href} className={""}>
          <Buttons
            text={props.buttonText || "View Pricing"}
            className="plans"
          />
        </a>
      </div>
      <div
        className={`imgcontainer slide-fwd-center ${
          props.dash ? "dashimg" : null
        }`}
      >
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
}

export default frontPage;
