import { useEffect } from "react";
import Footer from "../../components/layout/Unauth/Footer/Footer";
import Nav from "../../components/layout/Unauth/Nav/Nav";
import { ceo, cfo, coo, cto, boss } from "../../images/images";
import { motion } from "framer-motion";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container pushDown">
          <div className="container">
            <h1 className="brown">Meet Our Executive Board</h1>
            <span className="block gray mt-3">
              The Executive Board is responsible for the day-​to-day operational
              management of SmartSHE. It develops and implements the strategic
              business plans for the Group overall as well as for the principal
              businesses, subject to approval by the Board of Directors.
            </span>
          </div>
          <div className="ourserGrid container mb-3">
            <div id="ceo">
              <div
                style={{
                  backgroundImage: `url(${boss})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "350px",
                }}
              ></div>

              <div>
                <span className="block atGrabLight bold mt-3">
                  Emmanuel Ojinnaga
                </span>
                <span className="block atGrabLight">
                  Chief Executive Officer
                </span>
              </div>
            </div>
            <div id="coo">
              <div
                style={{
                  backgroundImage: `url(${coo})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "350px",
                }}
              ></div>

              <div>
                <span className="block atGrabLight bold mt-3">Bennet Ukoh</span>
                <span className="block atGrabLight">
                  Chief Operations Officer
                </span>
              </div>
            </div>
            <div id="cco">
              <div
                
              ></div>

              <div>
                <span className="block atGrabLight bold mt-3">
                  Udemeobong Ojinnaga
                </span>
                <span className="block atGrabLight">
                  Chief Commercial Officer
                </span>
              </div>
            </div>
            <div id="cto">
              <div
                style={{
                  backgroundImage: `url(${cto})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "350px",
                }}
              ></div>

              <div>
                <span className="block atGrabLight bold mt-3">
                  Edidiong Obodom
                </span>
                <span className="block atGrabLight">
                  Chief Technology Officer
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default OurTeam;
