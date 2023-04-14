import { instant, invoice, logo } from "../images/images";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Footer from "../components/layout/Footer/Footer.js";

const Home = () => {
  const navigate = useNavigate();

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    } else if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  const register = () => {
    return navigate("/signup");
  };
  const refresh = () => {
    return window.location.reload();
  };

  return (
    <>
      <div>
        <div className="fixedct-top bg-white bottomShadow">
          <div className="centerMarg center stuff limiter" onClick={refresh}>
            <img src={logo} alt="smartsheLogo" width="80px" />
            <h3 className="brown inlineBlock">SmartSHE</h3>
          </div>
        </div>
        <div className="background pushDownMain">
          <div className="flexer container">
            <div className="leftHandside">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="white atGrab container centerpartial">
                  <span>INVOICE DISCOUNT FINANCING COMPANY</span>
                  <span className="atGrabL block mt-2">
                    Coming soon, register now to get a discount.
                  </span>
                  <motion.div
                    className="limiter centerMargpartial"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                  >
                    <button
                      onClick={register}
                      className="btn bold bg-brown btn-lg block mt-5 bottomShadow btnct btnct-white"
                    >
                      Register Now
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container pitch pushDown-1">
          <span className="atGrabl brown block center bold">Who We Are</span>
          <span className="atGrab1 centerMarg black block mb-2 limiter">
            About Us
          </span>
          <span className="centerpartial">
            <span className="block gray container">
              Welcome to SmartSHE. An online Invoice Discounting Infrastructure
              for all African SMBs. SmartSHE is a B2B supply chain financing
              system that provides timely Invoice Discounting, Procurement
              Financing and working capital financing for all marginalized
              African SMBs.
            </span>
          </span>
          <div ref={ref}>
            <motion.div animate={animation}>
              <div className="oursolGrid">
                <div className="bg-gray solItem center">
                  <span className="block paddTB mb-2 centerMarg atGrab-1 limiter underline">
                    Alternate Finance
                  </span>
                  <div className="gray container">
                    We simply leverage on SMBs invoices/ receivables to get easy
                    and quick business financing to fulfill their operational
                    needs.
                  </div>
                </div>
                <div className="bg-gray solItem center">
                  <span className="block paddTB mb-2 centerMarg atGrab-1 limiter underline">
                    100% Digital
                  </span>
                  <div className="gray container">
                    We will allow instant finance with just a few clicks through
                    our web, mobile and desktop applications.
                  </div>
                </div>
                <div className="bg-gray solItem center">
                  <span className="block paddTB mb-2 centerMarg atGrab-1 limiter underline">
                    User Experience
                  </span>
                  <div className="gray container">
                    We understand the needs of SMBs and aim to design a product
                    to cater to their specific needs.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="ourserGrid container">
            <div>
              <span className="atGrabl brown block center bold">
                Our Vision
              </span>
              <div className="gray container">
                To be Africa's quickest gateway for Invoice Discount Financing.
              </div>
            </div>
            <div>
              <span className="atGrabl brown block center bold">
                Our Mission
              </span>
              <div className="gray container">
                To build an Invoice Discounting Infrastructure that will help
                secure the future and economic wealth of 80million SMBs in
                Africa.
              </div>
            </div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        > */}
        <div className="container pitch pushDown-1">
          <span className="atGrabl brown block center bold">What We Offer</span>
          <span className="atGrab1 centerMarg black block mb-2 limiter">
            Our Services
          </span>
          <span className="centerpartial">
            <span className="block gray container">
              Changing over 80 million SMBs businesses and financing option
              through Invoice Discounting. We take 9% commission on each
              transaction.
            </span>
          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ourserGrid container">
              <div className=" solItem center bottomShadow">
                <div
                  className="br-t"
                  style={{
                    backgroundImage: `url(${instant})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "250px",
                  }}
                ></div>
                <span className="block paddTB mb-2 centerMarg atGrab-1 underline">
                  Procurement Order Financing
                </span>
                <div className="gray container left">
                  <span>
                    We are a B2B2C supply chain financing system that provides
                    timely working capital solution to all marginalized
                    businesses in Africa. The idea is to ensure these businesses
                    have an easy access to powering their profitable businesses
                    using SmartSHE platform
                  </span>
                </div>
              </div>
              <div className="solItem center bottomShadow">
                <div
                  className="br-t"
                  style={{
                    backgroundImage: `url(${invoice})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "250px",
                  }}
                ></div>
                <span className="block paddTB mb-2 centerMarg atGrab-1 underline">
                  Invoice discounting
                </span>
                <div className="gray container left">
                  <span>
                    We are a B2B Invoice Discount platform that helps both
                    Vendors/ Enterprises run efficiently, as we make seamless
                    provision for Supplier Financing. The company’s unpaid
                    Invoices are used as a collateral for a loan, which hereby
                    enable those companies and contractors to leverage the value
                    of their sales ledger.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* </motion.div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container pitch pushDown-1">
            <span className="atGrabl brown block center bold">How We Work</span>
            <span className="atGrab1 centerMarg black block mb-2 limiter">
              Our Operating Model
            </span>
            <span className="block gray limiter centerMarg">
              Our operating model is simple and quick.
            </span>
            <div className="centerFlex pushDown-2 container">
              <div className="centerF">
                <ul className="atGrab-1">
                  <li className="mb-4 left">
                    SMB sends invoice to customer with purchase{" "}
                  </li>
                  <li className="mb-4 left">SMB sells invoice to SmartSHE</li>
                  <li className="mb-4 left">
                    SMB receives 70-85% of invoice in cash advance
                  </li>
                  <li className="mb-4 left">
                    Customer pays invoice to SmartSHE
                  </li>
                  <li className="mb-4 left">
                    After the customer pays, the SMB is eligible for a rebate
                    for the remainder of the invoice, minus a fee.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
