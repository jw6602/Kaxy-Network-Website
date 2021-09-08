import "./footer.scoped.css";
import logo from "../assets/logo.svg";

function footer() {
  return (
    <footer>
      <div className="container">
        <div class="section1">
          <a href="#" className="logo flex sp-bw al-ce">
            <img src={logo} alt="" />
            <span>Kaxy Network</span>
          </a>
          <div class="newsletter">Kaxy Network Inc © 2021</div>
        </div>

        <div class="section2">
          <div class="footerheader">Navigation</div>
          <div class="footerlinks">
            <a href="#"> Home </a>
            <a href="#product">Product</a>
            <a href="#faq"> FAQ </a>
            <a href="#contact"> Contact </a>
          </div>
        </div>

        <div class="section3">
          <div class="footerheader">Legal</div>
          <div class="footerlinks">
            <a href="/terms-of-service"> Terms &amp; Conditions </a>
            <a href="/privacy-policy"> Privacy Policy </a>
            <a href="/refund-policy"> Refund Policy </a>
          </div>
        </div>

        <div class="section4">
          <div class="footerheader">API Documents</div>
          <div class="footerlinks">
            <a href="https://documenter.getpostman.com/view/16611495/TzzHnDf6"> Residential</a>
            <a href="https://documenter.getpostman.com/view/16611495/Tzm8Gbbm"> Residential ISP</a>
          </div>
        </div>

        <div class="section5">
          <div class="footerheader">Socials</div>
          <div class="footerlinks">
            <a href="https://twitter.com/KaxyNetwork">
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.07998 20C9.55868 20.0495 11.0323 19.8021 12.4137 19.2723C13.7952 18.7426 15.0564 17.9413 16.1229 16.9159C17.1894 15.8904 18.0395 14.6615 18.623 13.3019C19.2064 11.9423 19.5115 10.4795 19.52 9.00004C20.1976 8.16146 20.7008 7.19587 21 6.16004C21.0223 6.07821 21.0205 5.99166 20.9948 5.91082C20.9691 5.82998 20.9205 5.7583 20.855 5.70441C20.7895 5.65052 20.7098 5.61672 20.6255 5.60707C20.5412 5.59743 20.456 5.61235 20.38 5.65004C20.0255 5.8207 19.6263 5.87582 19.2388 5.80765C18.8513 5.73948 18.495 5.55145 18.22 5.27004C17.8689 4.88562 17.4443 4.57557 16.9712 4.35827C16.4982 4.14097 15.9863 4.02083 15.4659 4.00498C14.9456 3.98913 14.4273 4.07788 13.9419 4.26598C13.4565 4.45408 13.0138 4.73771 12.64 5.10004C12.1282 5.5957 11.7533 6.21533 11.5518 6.89872C11.3503 7.5821 11.329 8.306 11.49 9.00004C8.13998 9.20004 5.83998 7.61004 3.99998 5.43004C3.9447 5.36745 3.87239 5.3223 3.79188 5.30011C3.71137 5.27793 3.62614 5.27967 3.54661 5.30512C3.46707 5.33057 3.39666 5.37864 3.34399 5.44344C3.29131 5.50824 3.25865 5.58698 3.24998 5.67004C2.89945 7.61447 3.15231 9.61959 3.9746 11.4161C4.79689 13.2126 6.14922 14.7145 7.84998 15.72C6.70962 17.0279 5.10819 17.8447 3.37998 18C3.28739 18.0154 3.20192 18.0593 3.13553 18.1257C3.06914 18.192 3.02515 18.2774 3.00972 18.37C2.99429 18.4626 3.0082 18.5577 3.04948 18.6419C3.09077 18.7262 3.15738 18.7955 3.23998 18.84C4.7435 19.5914 6.39921 19.9882 8.07998 20Z"
                  fill="#7B94E6"
                />
              </svg>
              <div>@kaxynetwork</div>
            </a>
            <a href="https://www.instagram.com/kaxynetwork/">
              {" "}
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M15.0338 3.83325H8.92446C6.11313 3.83325 3.83331 6.11307 3.83331 8.9244V15.0338C3.83331 17.8451 6.11313 20.1249 8.92446 20.1249H15.0338C17.8452 20.1249 20.125 17.8451 20.125 15.0338V8.9244C20.125 6.11307 17.8452 3.83325 15.0338 3.83325ZM18.5976 15.0338C18.5976 16.999 16.999 18.5976 15.0338 18.5976H8.92446C6.95928 18.5976 5.36066 16.999 5.36066 15.0338V8.9244C5.36066 6.95922 6.95928 5.3606 8.92446 5.3606H15.0338C16.999 5.3606 18.5976 6.95922 18.5976 8.9244V15.0338Z"
                    fill="#7B94E6"
                  />
                  <path
                    d="M11.9792 7.90625C9.7299 7.90625 7.90625 9.7299 7.90625 11.9792C7.90625 14.2284 9.7299 16.0521 11.9792 16.0521C14.2284 16.0521 16.0521 14.2284 16.0521 11.9792C16.0521 9.7299 14.2284 7.90625 11.9792 7.90625ZM11.9792 14.5247C10.576 14.5247 9.43359 13.3823 9.43359 11.9792C9.43359 10.575 10.576 9.43359 11.9792 9.43359C13.3823 9.43359 14.5247 10.575 14.5247 11.9792C14.5247 13.3823 13.3823 14.5247 11.9792 14.5247Z"
                    fill="#7B94E6"
                  />
                  <path
                    d="M15.9501 8.95839C16.4749 8.95839 16.9003 8.53299 16.9003 8.00825C16.9003 7.4835 16.4749 7.05811 15.9501 7.05811C15.4254 7.05811 15 7.4835 15 8.00825C15 8.53299 15.4254 8.95839 15.9501 8.95839Z"
                    fill="#7B94E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="16.2917"
                      height="16.2917"
                      fill="white"
                      transform="translate(3.83331 3.83325)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div> @kaxynetwork</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
