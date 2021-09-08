import Nav from "../components/nav";
import Mobnav from "../components/mobnav";
import Footer from "../components/footer";
import FeatureBoxes from "../components/features";
import ServerPricingBox from "../components/serverPricingBox";
import FrontDoc from "../components/frontDocs";
import DashImg from "../assets/dash.png";

import "./doc.scoped.css";

function server() {
  return (
    <div>
      <Nav links={[]} />
      <Mobnav links={[]} />
      <FrontDoc
        dash={true}
        secText={"Last updated 1st June 2021"}
        primaryText="Refund Policy"
        imgSrc={DashImg}
        buttonText="Contact Us"
      />

      <div className="container largeText">
          <p>We have a NO REFUND POLICY and all products (proxies, servers etc.) which are purchased/ordered from us and sent, are also non-refundable and deemed to be final. BY USING THIS SITE NO PHYSICAL PRODUCT OR SERVICES WILL BE SHIPPED OR DELIVERED WHILE PURCHASING ANY PRODUCTS.</p>
          <h3 style={{color: '#6f84ad',
                backgroundColor: "transparent",
                fontWeight: 700,
                fontSize: "21px",
                marginBottom: "15px",
                textDecoration: "none",
              }} id="our-refund-in-some-circumstance">OUR REFUND IN SOME CIRCUMSTANCE</h3>
          <p>If you found any issue while downloading or receiving our products, we will be happy on your contact with our customer support staff. In some of special circumstance we also encourage and offer refund to the customers, we refund only;</p>
          <ul style={{paddingLeft: 40}}>
              <li>If some duplicate payment was made due to technical glitch, or any other error;</li>
              <li>If we make a refund as per policy of our refund policy which we may update from time to time. Refund shall only be made if our policy agrees on such type of refund;</li>
              <li>If we have made a mistake while delivering the products and;</li>
              <li>If we consider the refund is necessary as per decision of our customer support staff but it shall be our sole discretion.</li>
          </ul>
          <p>This refund shall only be made if our customer service support staff approves your request for refund. It is not binding on us to refund nor can buyer force us to do so. By purchasing any products from us, you agree that you have read the refund policy and you accept all terms and will not dispute or ask us for a partial or full refund for purchased products.</p>

      </div>

      <Footer />
    </div>
  );
}

export default server;
