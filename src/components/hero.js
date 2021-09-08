import Buttons from "../components/button";
import "./hero.scoped.css";
import mobBg from "../assets/mobbg.png";

function hero() {
  return (
    <div className="hero container jc-ce flex-col">
      <div className="primary-text focus-in-expand">
        Tier 1 Residential Network.
      </div>
      <div className="sec-text focus-in-expand">
        Connects you to  AT&T, Sprint, CenturyLink, Verizon, Cox and more.
      </div>
      <a href="#product">
        <Buttons text="View Products" className="plans" />
      </a>
      <div className="mob-only">
        <img src={mobBg} alt="" />
      </div>
    </div>
  );
}

export default hero;
