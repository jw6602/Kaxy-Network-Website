import Box from "./productBox";
import lock from "../assets/lock.png";
import ip from "../assets/ip.png";
import soln from "../assets/soln.png";
import "./products.scoped.css";

function products() {
  return (
    <div className="products container" id="product">
      <div className="header">Products</div>
      <div className="boxes">
        <Box
          to="/residential-isp-hosting"
          imgSrc={lock}
          text1="Residential ISP Hosting"
          text2="You can bring your own IP space to our network."
        />
        <Box
          to="/residential-isp-network"
          imgSrc={ip}
          text1="Residential ISP Network"
          text2="We offer isp ips from multiple carriers."
        />
        <Box
          to="/residential-network"
          imgSrc={soln}
          text1="Residential Network"
          text2="We offer residential ips across the world."
        />
      </div>
    </div>
  );
}

export default products;
