import React, { useState } from "react";
import "./serverPack.scoped.css";
import ServerPricingBox from "../components/serverPricingBox";

function ServerPack(props) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={`pack-container ${opened ? "opened" : ""}`}>
      <div className="pack-details" onClick={() => setOpened(!opened)}>
        <div>{props.core}</div>
        <div>{props.memory}</div>
        <div>{props.storage}</div>
        <div>{props.speed}</div>
        <div>
          <div className={`stock ${props.stock} `}>
            {props.stock ? "In Stock" : "Out of Stock"}
          </div>
        </div>
        <div>
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 11.7083C9.74786 11.7097 9.49781 11.6614 9.26429 11.566C9.03077 11.4706 8.81837 11.3301 8.63928 11.1524L0.972611 3.48578C0.793904 3.30707 0.652146 3.09492 0.555431 2.86143C0.458715 2.62793 0.408936 2.37768 0.408936 2.12495C0.408936 1.87222 0.458715 1.62196 0.555431 1.38847C0.652146 1.15498 0.793904 0.942821 0.972611 0.764114C1.15132 0.585407 1.36347 0.443648 1.59697 0.346933C1.83046 0.250217 2.08071 0.200439 2.33344 0.200439C2.58617 0.200439 2.83643 0.250217 3.06992 0.346933C3.30342 0.443648 3.51557 0.585407 3.69428 0.764114L10.0001 7.10828L16.3251 1.01328C16.5014 0.817226 16.7163 0.659659 16.9563 0.550436C17.1963 0.441212 17.4562 0.382683 17.7199 0.378506C17.9835 0.374329 18.2452 0.424594 18.4885 0.52616C18.7318 0.627726 18.9516 0.778408 19.134 0.96878C19.3165 1.15915 19.4577 1.38512 19.5488 1.63255C19.6399 1.87998 19.679 2.14355 19.6636 2.40678C19.6482 2.67001 19.5787 2.92723 19.4594 3.16236C19.34 3.39749 19.1735 3.60546 18.9701 3.77328L11.3034 11.1716C10.9529 11.5096 10.4869 11.7014 10.0001 11.7083Z"
              fill="#000E3A"
            />
          </svg>
        </div>
      </div>
      <div className="packs">
        {props.plans.map((k) => (
          <ServerPricingBox {...k} />
        ))}
      </div>
    </div>
  );
}

export default ServerPack;
