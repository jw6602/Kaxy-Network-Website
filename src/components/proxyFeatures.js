import FeaturesBox from "../components/featureBox";
import globe from "../assets/globe.svg";
import target from "../assets/target.svg";
import storage from "../assets/storage.svg";
import like from "../assets/like.svg";
import api from "../assets/api.svg";
import support from "../assets/support.svg";
import "./features.scoped.css";
function features() {
  return (
    <div className="featureBoxes" id="features">
      <div className="container ">
        <div className="header">Features</div>
        <div className="grid">
          <FeaturesBox
            imgSrc={globe}
            header="Dedicated Internet Access"
            text="We have owned mutiple 10 Gigs DIAs to connect you to the residential isps."
          />
          <FeaturesBox
            imgSrc={target}
            header="Fresh IP Resource"
            text="We have partnered with multiple IPV4 providers to secure the best resources."
          />
          <FeaturesBox
            imgSrc={storage}
            header="Best Server Specs"
            text="Powerful bare metal servers guarantee the performance and stability."
          />
          <FeaturesBox
            imgSrc={api}
            header="Reseller API"
            text="You can easily start your own proxy business with our Reseller API."
          />
          <FeaturesBox
            imgSrc={like}
            header="Experienced Team"
            text="Professional network & web developers always here to help you."
          />
          <FeaturesBox
            imgSrc={support}
            header="Friendly Support"
            text="Open tickets anytime for assistance if you meet any troubles."
          />
        </div>
      </div>
    </div>
  );
}

export default features;
