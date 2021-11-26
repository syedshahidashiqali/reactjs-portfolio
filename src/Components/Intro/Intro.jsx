import "./Intro.css";
import bulbIcon from "../../images/bulb-icon.png";
import conversationIcon from "../../images/conversation-icon.png";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Intro() {

  const [countFocus, setCountFocus] = useState(false);
  const [introFocus, setIntroFocus] = useState(false);
  const [classNames, setClassNames] = useState("right-section hidden");
  return (
    <article className="intro">
      <div className="container section-container flex ai-c">
        <section className="left-section">
          <section className="left-child-one">
            <img style={{ height: "50px" }} src={bulbIcon} alt="bulb icon" />
            <h3>
              {/* 42 */}
              <CountUp
                // redraw={true}
                start={countFocus ? 0 : null}
                end={42}
                duration={1}
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setCountFocus(true);
                          // setClassNames("right-section animate__animated animate__fadeInUp")
                        }
                      }}
                    >
                      <a>+</a>
                    </VisibilitySensor>
                  </div>
                )}
              </CountUp>
            </h3>
            <h6>
              YEARS OF <br />
              EXPERIENCED
            </h6>
          </section>
          <section className="left-child-two"></section>
        </section>
        <section className={classNames}>
          <VisibilitySensor onChange={(isVisible) => {
              console.log("Intro section is now %s", isVisible ? "visible" : "hidden");
              if(isVisible){
                  setIntroFocus(true)
                  setClassNames("right-section show animate__animated animate__fadeInUp")
                //   console.log(isVisible)
              }
          }}>
            <>
              <h6 className="right-section-title">Welcome to Portech</h6>
              <h2>We Are Portech Creative Studio Agency</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia.
              </p>
              <>
                <div className="right-section-last-container flex jc-sb">
                  <div className="right-section-child-one flex ai-c">
                    <img
                      style={{ height: "50px" }}
                      src={conversationIcon}
                      alt=""
                    />
                    <span className="m-2 bold">
                      EXPERT
                      <br />
                      TEAM
                    </span>
                  </div>
                  <div className="right-section-child-two flex ai-c">
                    <img style={{ height: "50px" }} src={bulbIcon} alt="" />
                    <span className="m-2 bold">
                      SOLUTION
                      <br />
                      FOR BUSINESS
                    </span>
                  </div>
                </div>
                <div>
                  <button className="get-in-btn">GET IN TOUCH WITH US</button>
                </div>
              </>
            </>
          </VisibilitySensor>
        </section>
      </div>
    </article>
  );
}

export default Intro;
