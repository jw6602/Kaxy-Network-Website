import Nav from "../components/nav";
import Mobnav from "../components/mobnav";
import Footer from "../components/footer";
import FeatureBoxes from "../components/features";
import ServerPricingBox from "../components/serverPricingBox";
import FrontPage from "../components/frontPage";
import DashImg from "../assets/dash.png";

function server() {
  return (
    <div>
      <Nav links={[]} />
      <Mobnav links={[]} />
      <FrontPage
        dash={true}
        secText="100% Dedicated Residential IPs Pool Owned by Kaxy Network. Coming soon. "
        primaryText="Residential Network"
        imgSrc={DashImg}
        buttonText="Join Waitlist"
        href="https://kaxynetwork.com/#contact"
      />
      <Footer />
    </div>
  );
}

export default server;
