import FeaturesBox from "../components/featureBox";
import perform from "../assets/perform.svg";
import xeon from "../assets/xeon.svg";
import ssd from "../assets/ssd.svg";
import delivery from "../assets/delivery.svg";
import support from "../assets/support.svg";
import api from "../assets/api.svg"
import "./features.scoped.css";
function features() {
  return (
    <div className="featureBoxes" id="features">
      <div className="container ">
        <div className="header">Features</div>
        <div className="grid">
          <FeaturesBox
            imgSrc={perform}
            header="High Performance"
            text="Latest hardwares with solid network provide you with a 100% uptime guarantee."
          />
          <FeaturesBox
            imgSrc={xeon}
            header="Never Oversale"
            text="We will never oversell and always be ready to scale up our circuits."
          />
          <FeaturesBox
            imgSrc={api}
            header="Software Support"
            text="We will provide our software or custom configuration to our hosting customers."
          />
          <FeaturesBox
            imgSrc={xeon}
            header="Fast Delivery"
            text="We will try our best to expedite the process for you to avoid wasting time."
          />
          <FeaturesBox
            imgSrc={delivery}
            header="Transparent Process"
            text="We will instantly notify you with the updates and always keep you updated."
          />
          <FeaturesBox
            imgSrc={support}
            header="Friendly Support"
            text="As a client, you will have access to our portal. Open tickets anytime for assistance."
          />
        </div>
      </div>
    </div>
  );
}

export default features;
