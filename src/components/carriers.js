import "./carriers.scoped.css";
import carrier from "../assets/carriers.png";
import at from "../assets/at.svg";
import sprint from "../assets/sprint.svg";
import century from "../assets/century.svg";
import verizon from "../assets/verizon.svg";
import spectrum from "../assets/spectrum.svg";
import cox from "../assets/cox.svg";
import optimum from "../assets/optimum.svg";
import rcn from "../assets/rcn.svg";

function carriers() {
  return (
    <div className="connectivity" id="connectivity">
      <div className="container pc-only">
        <div className="header">Connectivity</div>
        <div className="images1">
          <img src={carrier} alt="" />
        </div>
      </div>
      <div className="container mob-only">
        <div className="header">Connectivity</div>
        <div className="images">
          <div>
            <img src={at} alt="" />
          </div>
          <div>
            <img src={sprint} alt="" />
          </div>
          <div>
            <img src={century} alt="" />
          </div>
          <div>
            <img src={verizon} alt="" />
          </div>
          <div>
            <img src={spectrum} alt="" />
          </div>
          <div>
            <img src={cox} alt="" />
          </div>
          <div>
            <img src={optimum} alt="" />
          </div>
          <div>
            <img src={rcn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default carriers;
