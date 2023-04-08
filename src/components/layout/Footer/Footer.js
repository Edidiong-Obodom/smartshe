import classes from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={`${classes.footer}`}>
      <div className="container">
        <div className="container">
          <div className="underlineGrey paddTB ourserGrid">
            <div>
              <span className="block paddTB limiter underline1 atGrab-2">
                Contact Us
              </span>
              <span className="block paddTB left">
                Contact us by giving us a call or using any of the social media handles below or send
                us a mail at info@smartshe.com.ng{" "}
                <span className="">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </span>
              <span className="block paddTB atGrab left">
                <span className="stuff">
                  <a
                    className="a or"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/company/smartshe"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </span>
                <span className="ml-2 stuff or">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span className="ml-2 stuff or">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span className="ml-2 stuff">
                  <a
                    className="a or"
                    rel="noreferrer"
                    target="_blank"
                    href="tel:+2348052033333"
                  >
                  <i className="fa-solid fa-phone"></i></a>
                </span>
                <span className="ml-2 stuff or">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span className="ml-2 stuff or">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                
              </span>
            </div>
            <div>
              <span className="block paddTB limiter underline1 atGrab-2">
                About Us
              </span>
              <span className="block paddTB">
                SmartShe is an instant digital invoice discounting and
                purchasing order finance, for African SMBs. We aim to allow
                African SMBs use their Invoices / Receivables to get easy and
                fast access to finance, in order to fulfil their business
                operational needs.
              </span>
            </div>
          </div>
          <div className="paddTB">
            <span className="block paddTB">
              <span className="browni">SmartSHE</span>© 2023. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
