import { useEffect, useRef } from "react";
import style from "./App.module.scss";
import CustomBranding from "./assets/custom-branding.svg";
import WhiteLabel from "./assets/white-label.svg";
import EndToEnd from "./assets/end-to-end.svg";
import ScalableSolutions from "./assets/scalable-solutions.svg";
import VisionMision from "./assets/vision-mission.png";
import Brand from "./assets/Brand.png";
import VisionResult from "./assets/vision-result.png";
import Tick from "./assets/tick.svg";
import ResultIcon from "./assets/result-icon.png";
import Consultation from "./assets/consultation.svg";
import DesignTech from "./assets/design-tech.svg";
import Sampling from "./assets/sampling.svg";
import Production from "./assets/flexible-production.svg";
import Branding from "./assets/branding.svg";
import OfferImg from "./assets/offer-img.png";
import DressesImg1 from "./assets/work1.png";
import DressesImg2 from "./assets/works2.png";
import DressesImg3 from "./assets/works3.png";
import { ReactComponent as ArrowIcon } from "./assets/arrrow-icon.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className={style["main-video-container"]}>
        <div className={style["video-container"]}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            loop
            muted
            className={style["background-video"]}
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/1355696389362568527/TEAM/f1ea/faa7/-f683-46e2-802a-2e67804a0ed1?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISsedrKXfGkPP3b1wEAtFYU~WGn~U-G5GmzoeSPZeHU6omxhVPWJXPXqm~0mHOudadSd0FX3AXHsb7m86WEe2-WYT~TDUjiWUD4tH2UM8RPk5im~51Pq60TlimJ-BkmHBIUDkIpby7SIDyv~9ZUgT2htR-KVRai6azqiknV-~9bGDt3aXerYYEYMDfhrSuOAXqM4FucWM6W3aWdaRQtApsacLal9VGjOzCWpjrgsjJP3S5FLhSm834D~HZcja6z73H7VloDMFhUWe4rOuXdYgxfijrCnMuaFeYL-pYOn5MZp-lPuSDP7sOVk207Pko54tYSDH8~InZIK9Gg7yzkhAw__"
              type="video/mp4"
            />
          </video>
          <div className={style["overlay-text"]}>
            <div>
              <div className={style["overlay-title"]}>
                From Vision to Reality <br />
                our Fashion Co-Founder.
              </div>
              <p className={style["overlay-description"]}>
                End-to-end fashion solutions for startups, scaling brands, and{" "}
                <br />
                enterprises. From design to delivery, we co-create your success.
              </p>
              <div className={style["overlay-btn-container"]}>
                <button className={style["overlay-btn"]}>Learn More</button>
                <button
                  className={style["overlay-btn"]}
                  onClick={handleVideoClick}
                >
                  Play / Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style["feature-container"]}>
        <div className={style["feature-sub-container"]}>
          <div className={style["feature"]}>
            <img src={CustomBranding} alt="CustomBranding" />
            <div>
              Custom <br /> Branding
            </div>
          </div>
          <div className={style["feature"]}>
            <img src={WhiteLabel} alt="CustomBranding" />
            <div>
              White-Label <br /> Options
            </div>
          </div>
          <div className={style["feature"]}>
            <img src={EndToEnd} alt="CustomBranding" />
            <div>
              End-to-End <br /> Support
            </div>
          </div>
          <div className={style["feature"]}>
            <img src={ScalableSolutions} alt="CustomBranding" />
            <div>
              Scalable <br /> Solutions
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "90%" }} />
      <div className={style["section-container"]}>
        <div style={{ width: "80%" }}>
          <div className={style["vision-mision-container"]}>
            <img
              src={VisionMision}
              alt="VisionMision"
              className={style["VisionMision"]}
            />
            <div>
              <div className={style["vision-mision-text"]}>
                Your Vision, Our Mission
              </div>
              <p className={style["vision-mision-description"]}>
                At SotBella360, we’re more than just a service provider—we’re
                your dedicated co-founder, working side by side to build, scale,
                and manage your fashion brand. Whether you’re a startup testing
                your first idea, a scaling brand expanding collections, or an
                enterprise managing global operations, we bring expertise,
                creativity, and reliability to every step of the process. <br />
                <p style={{ marginTop: "30px" }}>
                  With SotBella360, your vision becomes reality.
                </p>
              </p>
              <button className={style["vision-btn"]}>Contact Sales</button>
            </div>
          </div>
          <div className={style["vision-mision-container"]}>
            <div>
              <div className={style["vision-mision-text"]}>
                Why Hundreds of Brands Call Us Their Co-Founder
              </div>
              <div className={style["vision-points-container"]}>
                <div className={style["vision-points"]}>
                  <img src={Tick} alt="Tick" />
                  <span className={style["point-title"]}>
                    Comprehensive Services:{" "}
                    <span className={style["point-sub-title"]}>
                      From design to delivery, we manage everything.
                    </span>
                  </span>
                </div>
                <div className={style["vision-points"]}>
                  <img src={Tick} alt="Tick" />
                  <span className={style["point-title"]}>
                    Comprehensive Services:{" "}
                    <span className={style["point-sub-title"]}>
                      From design to delivery, we manage everything.
                    </span>
                  </span>
                </div>
                <div className={style["vision-points"]}>
                  <img src={Tick} alt="Tick" />
                  <span className={style["point-title"]}>
                    Comprehensive Services:{" "}
                    <span className={style["point-sub-title"]}>
                      From design to delivery, we manage everything.
                    </span>
                  </span>
                </div>
              </div>
              <button className={style["vision-btn"]}>Learn More</button>
            </div>
            <img src={Brand} alt="Brand" className={style["VisionMision"]} />
          </div>
          <div className={style["center"]}>
            <div className={style["vision-result-container"]}>
              <img
                src={VisionResult}
                alt="VisionResult"
                className={style["vision-result-img"]}
              />
              <div>
                <div className={style["vision-result-title"]}>
                  Where Your Vision Meets Results
                </div>
                <div className={style["tech-pack-container"]}>
                  <div className={style["tech-pack"]}>
                    <div className={style["tech-pack-title"]}>500+</div>
                    <div className={style["tech-pack-subTitle"]}>
                      Tech Packs Delivered
                    </div>
                  </div>
                  <div className={style["tech-pack"]}>
                    <div className={style["tech-pack-title"]}>20K+</div>
                    <div className={style["tech-pack-subTitle"]}>
                      Products Manufactured
                    </div>
                  </div>
                  <div className={style["tech-pack"]}>
                    <div className={style["tech-pack-title"]}>100+</div>
                    <div className={style["tech-pack-subTitle"]}>
                      Brands Launched
                    </div>
                  </div>
                  <div className={style["tech-pack"]}>
                    <div className={style["tech-pack-title"]}>100%</div>
                    <div className={style["tech-pack-subTitle"]}>
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
                <hr />
                <img
                  src={ResultIcon}
                  alt="ResultIcon"
                  style={{ margin: "10px 0px", width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className={style["process-container"]}>
            <div style={{ width: "86%" }}>
              <div className={style["process-title"]}>Our Seamless Process</div>
              <div className={style["process-main-container"]}>
                <div className={style["process-sub-container"]}>
                  <div className={style["process-item"]}>
                    <div className={style["process"]}>
                      <img src={Consultation} alt="Consultation" />
                    </div>
                  </div>
                  <div className={style["process-sub-title"]}>Consultation</div>
                  <div className={style["process-description"]}>
                    We understand your vision, goals, and brand identity.
                  </div>
                </div>
                <div className={style["process-sub-container"]}>
                  <div className={style["process-item"]}>
                    <div className={style["process"]}>
                      <img src={DesignTech} alt="DesignTech" />
                    </div>
                  </div>
                  <div className={style["process-sub-title"]}>
                    Design & Tech Packs
                  </div>
                  <div className={style["process-description"]}>
                    Our designers create production-ready designs and tech
                    packs.
                  </div>
                </div>
                <div className={style["process-sub-container"]}>
                  <div className={style["process-item"]}>
                    <div className={style["process"]}>
                      <img src={Sampling} alt="Sampling" />
                    </div>
                  </div>
                  <div className={style["process-sub-title"]}>Sampling</div>
                  <div className={style["process-description"]}>
                    Refine your products with precision-crafted prototypes.
                  </div>
                </div>
                <div className={style["process-sub-container"]}>
                  <div className={style["process-item"]}>
                    <div className={style["process"]}>
                      <img src={Production} alt="Production" />
                    </div>
                  </div>
                  <div className={style["process-sub-title"]}>
                    Flexible Production
                  </div>
                  <div className={style["process-description"]}>
                    Choose low MOQ or scale to high-volume production.
                  </div>
                </div>
                <div className={style["process-sub-container"]}>
                  <div className={style["process-item"]}>
                    <div className={style["process"]}>
                      <img src={Branding} alt="Branding" />
                    </div>
                  </div>
                  <div className={style["process-sub-title"]}>
                    Branding & Delivery
                  </div>
                  <div className={style["process-description"]}>
                    Custom labels, packaging, and logistics handled seamlessly.
                  </div>
                </div>
              </div>
              <div
                className={style["overlay-btn-container"]}
                style={{ marginTop: "50px" }}
              >
                <button className={style["header-btn"]}>Contact Sales</button>
              </div>
            </div>
          </div>

          <div className={style["offer-container"]}>
            <div className={style["process-title"]}>What We Offer</div>
            <p className={style["sub-title"]}>
              SotBella360 offers comprehensive end-to-end solutions for high-end
              women’s fashion brands. From understanding your brand's vision to
              delivering your final product, we handle every stage of the
              process with precision and care.
            </p>
            <div className={style["offer-btn-main-container"]}>
              <div className={style["offer-btn-container"]}>
                <button>Tech Packs</button>
                <button>White Labelling</button>
                <button>Custom Design</button>
              </div>
            </div>
            <div className={style["center"]}>
              <div
                className={style["vision-result-container"]}
                style={{ margin: "60px 0px 30px" }}
              >
                <img
                  src={OfferImg}
                  alt="OfferImg"
                  className={style["OfferImg"]}
                />
                <div>
                  <p className={style["offer-title"]}>
                    We start by working closely with your brand to understand
                    your unique vision, style, and goals. Our design team
                    transforms these ideas into tangible concepts and designs.
                  </p>
                  <p className={style["learn-more"]}>
                    Learn More <ArrowIcon />
                  </p>
                </div>
              </div>
            </div>
            <div className={style["overlay-btn-container"]}>
              <button className={style["header-btn"]}>Contact Sales</button>
            </div>
          </div>

          <div className={style["offer-container"]}>
            <div className={style["process-title"]}>
              Our Work Speaks for Itself
            </div>
            <p className={style["sub-title"]}>
              Explore our portfolio of designs, products, and branding for
              startups, scaling brands, and enterprises.
            </p>
            <div className={style["offer-btn-main-container"]}>
              <div className={style["offer-btn-container"]}>
                <button>All</button>
                <button>{"Co-Ords"}</button>
                <button>Dresses</button>
                <button>Dresses</button>
                <button>Denims</button>
              </div>
            </div>
            <div className={style["center"]}>
              <div className={style["dresses-container"]}>
                <img src={DressesImg1} alt="DressesImg1" />
                <img src={DressesImg2} alt="DressesImg2" />
                <img src={DressesImg3} alt="DressesImg3" />
              </div>
            </div>
            <div className={style["overlay-btn-container"]}>
              <button className={style["header-btn"]}>View More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
