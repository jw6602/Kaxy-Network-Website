import Nav from "../components/nav";
import Mobnav from "../components/mobnav";
import Footer from "../components/footer";
import FeatureBoxes from "../components/proxyFeatures";
import FrontPage from "../components/frontPage";
import PrxoyImg from "../assets/proxy.png";
import ProxyPricing from "../components/proxyPricing";
import Carriers from "../components/carriers";

function proxy() {
  return (
    <div>
      <Nav
        links={[
          { name: "Home", link: "/" },
          { name: "Pricing", link: "#product" },
          { name: "Connectivity", link: "#connectivity" },
          { name: "Features", link: "#features" },
        ]}
      />
      <Mobnav
        links={[
          { name: "Home", link: "/" },
          { name: "Pricing", link: "#product" },
          { name: "Connectivity", link: "#connectivity" },
          { name: "Features", link: "#features" },
        ]}
      />
      <FrontPage
        secText="We offer ips from multiple carriers."
        primaryText="Residential ISP Network"
        imgSrc={PrxoyImg}
        href="#product"
      />
      <ProxyPricing />
      <Carriers />
      <FeatureBoxes />
      <Footer />
    </div>
  );
}

export default proxy;
