import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../components/layout/Footer/Footer";
import Nav from "../../components/layout/Nav/Nav";
import { ceo } from "../../images/images";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const toOurTeam = () => {
    navigate("/ourteam");
  };
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pushDown container mb-5">
          <div className="container mb-3">
            <h1 className="brown">About Us</h1>
            <span className="block gray mt-3">
              SmartSHE is an online Invoice Discounting Infrastructure for all
              African SMBs. SmartSHE is a B2B supply chain financing system that
              provides timely Invoice Discounting, Procurement Financing and
              working capital financing for all marginalized African SMBs. The
              idea is to ensure these businesses have an easy access to powering
              their profitable businesses using SmartSHE platform.
            </span>
          </div>
          <div className="container mb-3">
            <h3 className="brown atGrabLight">Our Mission</h3>
            <span className="block gray mt-3">
              To build an Invoice Discounting Infrastructure that will help
              secure the future and economic wealth of 80million SMBs in Africa.
            </span>
          </div>
          <div className="container mb-3">
            <h3 className="brown atGrabLight">Our Vision</h3>
            <span className="block gray mt-3">
              To be Africa's quickest gateway for Invoice Discount Financing.
            </span>
          </div>
          <div className="ourserGrid container mb-3">
            <div
              style={{
                backgroundImage: `url(${ceo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "350px",
              }}
            ></div>
            <div>
              <h1 className="brown">Our Executive Board</h1>
              <span className="block gray mt-3">
                The Executive Board is responsible for the day-​to-day
                operational management of SmartSHE. It develops and implements
                the strategic business plans for the Group overall as well as
                for the principal businesses, subject to approval by the Board
                of Directors.
              </span>
              <span
                className="block mt-5 atGrabL grayHover bolder stuff"
                onClick={toOurTeam}
              >
                Get to know our Executive Board &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
