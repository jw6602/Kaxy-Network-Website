import "./faq.scoped.css";
import "antd/dist/antd.css";
import { Collapse } from "antd";
const { Panel } = Collapse;
function faq() {
  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="header">Frequently Asked Questions</div>
        <div className="faq-section">
          <Collapse bordered={false}>
            <Panel
              header="What services do you provide?"
              key="1"
            >
              The services we provide includes residential ips, residential isp ips, residential isp hosting, softwares and dashbord solutions.
            </Panel>
            <Panel
              header="Are there any prohibited uses of your ips?"
              key="2"
            >
              Any legal and legitimate use of our service that does not violate any laws or our Terms & Conditions is allowed.
            </Panel>
            <Panel
              header="Can I resell your residential ips and residential isp ips?"
              key="3"
            >
              Yes. Business clients can resell our products to their own customers through our resell API.
            </Panel>
            <Panel
              header="What is residential isp hosting and how does it work?"
              key="4"
            >
              We will provide everything includes network, servers, softwares and more. The only thing you need to do is to bring your own ip to us.
            </Panel>
            <Panel
              header="Do you offer bandwidth and colocation service?"
              key="5"
            >
              Yes, we do. Feel free to contact us to get a quote for more detailed info. 
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default faq;
